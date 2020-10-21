import { ContentType, Controller, Ctx, Get, Req, Res } from 'routing-controllers'
import nodeHtmlToImage from 'node-html-to-image'
import { Context, Request, Response } from 'koa'

@Controller('/html2img')
export class html2imgController {
  @Get('/test')
  @ContentType('image/png')
  async session(): Promise<any> {
    return nodeHtmlToImage({
      output: './image.png',
      html: '<html><body>Hello world!</body></html>',
      puppeteerArgs: {
        args: ['--no-sandbox'],
      },
    }).catch(e => console.log(e))
  }
}
