import { Elysia } from "elysia";
import { generatePrompt } from "../controllers/openai";
import { generatePromptModel } from "../models/openai";

const openaiRoute = new Elysia({ prefix: "/api/v1/openai" })
    .post("/prompt", generatePrompt, {
      body: generatePromptModel  
    })
export default openaiRoute;