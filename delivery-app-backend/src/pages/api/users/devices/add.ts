import Device from '@/domain/implementation/Device';
import { NextApiRequest, NextApiResponse } from 'next';
import { DeviceType } from '../../../../util/types';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import ServiceFactory from '@/service/ServiceFactory';

const unitOfWork = new UnitOfWork();
const serviceFactory = new ServiceFactory();
const deviceService = serviceFactory.CreateDeviceService(unitOfWork);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const device: Device = await CreateDeviceObject(req.body);
  const response = await deviceService.AddDevice<Device>(device);

  res.status(response.status).json(response.result || response.error);
}

async function CreateDeviceObject(client: DeviceType): Promise<Device> {
  console.log(client);
  return await new Device();
}
