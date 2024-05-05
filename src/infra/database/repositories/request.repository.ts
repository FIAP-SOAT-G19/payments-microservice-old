import { CreateRequestRepositoryInput, RequestRepositoryInterface } from '@/application/interfaces'
import { prismaClient } from '../prisma-client'

export class RequestsRepository implements RequestRepositoryInterface {
  async create (data: CreateRequestRepositoryInput): Promise<void> {
    const requestData = { ...data, updatedAt: new Date() }
    await prismaClient.request.create({ data: requestData })
  }
}
