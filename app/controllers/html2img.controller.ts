import { html2imgService } from 'app/services/html2img.service'
import { ContentType, Controller, Get, QueryParam } from 'routing-controllers'
import Container from 'typedi'

@Controller('/html2img')
export class html2imgController {
  html2imgService = Container.get(html2imgService)

  @Get('/test')
  @ContentType('image/png')
  async test(): Promise<any> {
    return this.html2imgService.render()
  }

  @Get('/render')
  @ContentType('image/png')
  async render(@QueryParam('p') p?: string): Promise<any> {
    return this.html2imgService.render(p ? JSON.parse(p) : {})
  }
}
