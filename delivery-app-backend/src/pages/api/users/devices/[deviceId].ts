import { NextApiRequest, NextApiResponse } from 'next';
import Client from '@/domain/implementation/Client';
import Device from '@/domain/implementation/Device';
import ServiceFactory from '@/service/ServiceFactory';
import IClientService from '@/service/interface/IClientService';
import IDeviceService from '@/service/interface/IDeviceService';
import IServiceFactory from '@/service/interface/IServiceFactory';
import IUnitOfWork from '@/service/interface/IUnitOfWork';
import UnitOfWork from '@/service/persistence/UnitOfWork';

const serviceFactory: IServiceFactory = new ServiceFactory();
const unitOfWork: IUnitOfWork = new UnitOfWork();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { deviceId } = req.query;
  const deviceService: IDeviceService = serviceFactory.CreateDeviceService(unitOfWork);

  const foundDevices = await deviceService.FindByRecordId<Device>(deviceId as string).then((result) => {
    console.log(`Found ${result.result?.length} devices`);
    return result.result;
  });

  return res.status(201).json({ devices: foundDevices });
}
