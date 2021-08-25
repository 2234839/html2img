import * as html2img_controller from "./html2img.controller"
// @ponicode
describe("test", () => {
    let inst: any

    beforeEach(() => {
        inst = new html2img_controller.html2imgController()
    })

    test("0", async () => {
        await inst.test()
    })
})
