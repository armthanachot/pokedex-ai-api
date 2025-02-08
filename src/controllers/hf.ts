import { generateImageModelType, generatePromptModelType } from "../models/hf";
import { genImage } from "../utils/hf/image";
import { genText } from "../utils/hf/text";
import { Context } from "elysia"

export const generatePrompt = async ({ body, set }: Context<{ body: generatePromptModelType }>) => {
    const { input } = body;
    const response = await genText(input);
    set.status = 200;
    return response;
};

export const generateImage = async ({ body, set }: Context<{ body: generateImageModelType }>) => {
    const { inputs, target_size } = body;
    const response = await genImage({
        inputs: inputs,
        target_size: target_size
    });
    set.status = 200;
    return {
        imagePath: `${Bun.env.SERVER_URL}/${response}`
    };
};