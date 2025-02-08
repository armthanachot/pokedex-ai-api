import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import hfRoutes from "./routes/hf";
import openaiRoute from "./routes/openai";
import { staticPlugin } from '@elysiajs/static'
import path from 'path'
import { cors } from "@elysiajs/cors"; // 🔹 Import CORS middleware


const app = new Elysia()
  .use(swagger()) // API documentation
  .use(hfRoutes) // Register routes
  .use(openaiRoute)
  .use(cors())
  .use(staticPlugin({
    prefix: '/assets',
    assets: path.resolve(__dirname, '../assets'),
  }))
  .listen(3003);
console.log(`Server running at http://localhost:3003`);