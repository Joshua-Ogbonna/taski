import { HttpResponse, http } from "msw";
import { server } from "../../../mocks/server";
import { createNewTodo } from "../postTodos";

describe("it should create new todo", () => {
    it("should create new todo", async () => {
        const todo = "new todo";
        const body = "new body";
        const userId = 102;
        const data = await createNewTodo(todo, body, userId);
        expect(data).toEqual({ title: todo, body, userId, id: 101 });
    });
});

