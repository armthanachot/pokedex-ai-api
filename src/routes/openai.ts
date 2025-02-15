import { Elysia } from "elysia";
import { generatePrompt,createImage } from "../controllers/openai";
import { generateImageModel, generatePromptModel } from "../models/openai";

const openaiRoute = new Elysia({ prefix: "/api/v1/openai" })
  .post("/prompt", generatePrompt, {
    body: generatePromptModel
  }).post("/image", createImage, {
    body: generateImageModel
  });
export default openaiRoute;