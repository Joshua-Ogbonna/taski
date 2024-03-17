import { HttpResponse, http } from "msw";
import { server } from "../../../mocks/server";
import { fetchTodos } from "../fetchTodos";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchtodos lib function", () => {
  it("should return the correct number of todo items", async () => {
    const todos = await fetchTodos();
    expect(todos.length).toBe(200);
  });
});
