import * as React from "react";
import { Autorpc } from "@malagu/rpc/lib/common/annotation/detached";
import { WelcomeServer } from "../common/welcome-protocol";
import { View } from "@malagu/react";

interface Prop {}
interface State {
  response: string;
}
@View("/test3")
export class Hello extends React.Component<Prop, State> {
  @Autorpc(WelcomeServer)
  protected welcomeServer!: WelcomeServer;

  constructor(prop: Prop) {
    super(prop);
    this.state = { response: "" };
  }

  async componentDidMount() {
    console.time();
    const response = await this.welcomeServer.say();
    console.timeEnd();
    this.setState({
      response,
    });
  }

  render() {
    return (
      <div>
        <img
          src={"data:image/png;base64," + this.state.response}
          style={{ border: "1px solid red", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}></img>
      </div>
    );
  }
}
