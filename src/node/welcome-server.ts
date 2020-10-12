import { WelcomeServer } from "../common/welcome-protocol";
import { Rpc } from "@malagu/rpc";
import type nodeHtmlToImageType from "node-html-to-image";
const nodeHtmlToImage = require("node-html-to-image") as typeof nodeHtmlToImageType;
import * as fs from "fs/promises";
import * as path from "path";

@Rpc(WelcomeServer)
export class WelcomeServerImpl implements WelcomeServer {
  async say(): Promise<string> {
    const templatePath = path.resolve(__dirname, "../../../src/node/template.html");
    console.log(templatePath);
    const templateHTML = (await fs.readFile(templatePath)).toString();
    const image = await nodeHtmlToImage({
      output: "./image.png",
      html: templateHTML,
      content: { name: "崮生", imageSource: "https://shenzilong.cn/favicon.png" },
      encoding: "base64",
    });
    return image.toString();
  }
}