import * as sessions_service from "./sessions.service"
import * as class_transformer from "class-transformer"
import * as sessions_entity from "../entities/sessions.entity"
// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new sessions_service.SessionsService()
    })

    test("0", async () => {
        await inst.create(class_transformer.plainToClass(sessions_entity.Session,{}))
    })
})
