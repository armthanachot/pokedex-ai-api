import { Elysia, t, Static } from 'elysia'

const generatePromptModel = t.Object({
    input: t.String()
})

const generateImagetModel = t.Object({
    inputs: t.String(),
    target_size: t.Object({
        width: t.Number(),
        height: t.Number()
    })
})

export {
    generatePromptModel,generateImagetModel
}

export type generatePromptModelType = Static<typeof generatePromptModel>
export type generateImageModelType = Static<typeof generateImagetModel>