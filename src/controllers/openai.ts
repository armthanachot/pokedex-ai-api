import { ChatCompletionMessageParam } from "openai/resources";
import { generateImageModelType, generatePromptModelType } from "../models/openai";
import { Context } from "elysia";
import OpenAI from "openai";
import { log } from "console";

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

export const createImage = async ({ body, set }: Context<{ body: generateImageModelType }>) => {
    // const resp = await this.openAIInstance.images.createVariation({

    // }) //=> สำหรับสร้างรูปภาพ แบบหลายรูป โดยอ้างอิงจากรูปค้นฉบับ

    log(body)
    const resp = await openAIInstance.images.generate({
        model: "dall-e-3",
        prompt: body.prompt,
        size: body.size,
        n: 1,
        quality: "standard",
        response_format: "url"
    })


    return {
        imagePath: resp.data[0].url
    }

}