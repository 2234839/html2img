import { Get, JsonController, QueryParam } from 'routing-controllers'
import Environment from 'configs/environments'

@JsonController()
export class SessionsController {
  constructor() {}

  @Get('/sessions')
  async session(): Promise<any> {
    return `hello on .`
  }
}
