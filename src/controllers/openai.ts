import { ChatCompletionMessageParam } from "openai/resources";
import { generatePromptModelType } from "../models/openai";
import { Context } from "elysia";
import OpenAI from "openai";

const openAIInstance = new OpenAI({
    apiKey: Bun.env.OPENAI_API_KEY,
})


export const generatePrompt = async ({ body, set }: Context<{ body: generatePromptModelType }>) => {
    const { role, input } = body;

    //`You are a artist creative thinking and specialist short prompt engineer.`
    let message: Array<ChatCompletionMessageParam> = [
        { role: "system", content: `You are a ${role}` },
        { role: "user", content: input },
    ]

    const response = await openAIInstance.chat.completions.create({
        model: "gpt-4o-mini",
        messages: message,
        temperature: 0.7, //specifies the randomness of the output
    })

    return {
        prompt: response.choices[0].message.content?.replaceAll("\n", "").replaceAll(`"`, ""),
    }

}