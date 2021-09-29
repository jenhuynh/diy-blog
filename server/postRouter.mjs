import express from "express";

import * as db from "./db.mjs";

const postRouter = express.Router();

postRouter.get("/", async (request, response) => {
  const post = await db.getDiyPosts();
  response.json(post);
});

postRouter.get("/:id", async (request, response) => {
  const id = request.params.id;
  const post = await db.getDiyPost(id);
  response.json(post);
});

// taskRouter.use(express.json());
// taskRouter.post("/", async (request, response) => {
//   const task = await db.addTask(request.body.name);
//   response.status(201).json(task);
// });

export default postRouter;
