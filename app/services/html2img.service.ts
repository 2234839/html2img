import nodeHtmlToImage, { NodeHtmlToImageOptions } from 'node-html-to-image'
import { Service } from 'typedi'

@Service()
export class html2imgService {
  async render(Options?: NodeHtmlToImageOptions): Promise<any> {
    const defaultOptions = {
      html: `<body style="width:200px;height:200px">
      Hello {{name}}!
      <div> 七星贯断嫦娥死，三生同听一楼钟 </div>
      </body>`,
      content: { name: '崮生' },
      quality: 100,
      type: 'png',
      puppeteerArgs: {
        args: ['--no-sandbox'],
      },
      /** 可以返回一个promise来异步等待 */
      async beforeScreenshot(page) {
        const w_h = (await page.evaluate(() => {
          return {
            //@ts-ignore
            width: document.body.clientWidth,
            //@ts-ignore
            height: document.body.clientHeight,
          }
        })) as {
          width: number
          height: number
        }
        await page.setViewport({
          ...w_h,
          deviceScaleFactor: 2,
        })
      },
    }
    return nodeHtmlToImage(Object.assign(defaultOptions, Options)).catch(e =>
      console.log(e),
    )
  }
}
