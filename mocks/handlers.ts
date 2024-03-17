import { http, HttpRequestHandler, HttpResponse } from "msw";

export const handlers = [
  http.get("/todos", () => {
    return HttpResponse.json({
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
      ],
    });
  }),

  http.post("/todos", async ({ request }) => {
    const { title, userId, body } = (await request.json()) as {
      title: string;
      userId: string;
      body: string;
    };
    return HttpResponse.json({
      title,
      userId,
      body,
    });
  }),
];
