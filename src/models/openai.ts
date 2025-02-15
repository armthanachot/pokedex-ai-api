import { Elysia, t, Static } from 'elysia'

const generatePromptModel = t.Object({
    role: t.String(),
    input: t.String()
})

const generateImageModel = t.Object({
    prompt: t.String(),
    size: t.Union([t.Literal("256x256"), t.Literal("512x512"), t.Literal("1024x1024"), t.Literal("1792x1024"), t.Literal("1024x1792")]),
})

export {
    generatePromptModel,
    generateImageModel

}

export type generatePromptModelType = Static<typeof generatePromptModel>
export type generateImageModelType = Static<typeof generateImageModel>