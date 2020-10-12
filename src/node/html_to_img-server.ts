import { Controller, Get, Header, Param } from "@malagu/mvc/lib/node";

@Controller("users")
export class UserController {
  @Get(":id")
  @Header("Content-type", "application/json")
  get(@Param("id") id: string) {
    return "test";
  }
}
