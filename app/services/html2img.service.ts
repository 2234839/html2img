import { Service } from 'typedi'

@Service()
export class SessionsService {
  async create(): Promise<string> {
    return 't3'
  }
}
