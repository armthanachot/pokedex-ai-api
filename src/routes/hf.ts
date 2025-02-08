import { Elysia } from "elysia";
import { generateImage, generatePrompt } from "../controllers/hf";
import { generateImagetModel, generatePromptModel } from "../models/hf";

const hfRoutes = new Elysia({ prefix: "/api/v1/hugging-face" })
  .post("/prompt", generatePrompt, {
    body: generatePromptModel
  }).post("/image", generateImage, {
    body: generateImagetModel
  })
export default hfRoutes;