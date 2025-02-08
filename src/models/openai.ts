import { Elysia, t, Static } from 'elysia'

const generatePromptModel = t.Object({
    role: t.String(),
    input: t.String()
})

export {
    generatePromptModel
}

export type generatePromptModelType = Static<typeof generatePromptModel>