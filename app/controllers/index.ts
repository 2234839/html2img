import { Controller, Get, Redirect } from 'routing-controllers'

export * from './sessions.controller'
export * from './html2img.controller'

@Controller('')
export class homeController {
  constructor() {}

  @Get('/')
  @Redirect('html2img/test')
  async home(): Promise<any> {
    // return `一切正常`
  }
}
