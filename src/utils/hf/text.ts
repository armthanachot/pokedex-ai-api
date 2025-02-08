import { HfInference, type TextGenerationOutput } from "@huggingface/inference";

const inference = new HfInference(Bun.env.HF_TOKEN);
async function genText(input: string): Promise<TextGenerationOutput> {
  try {
    const response = await inference.textGeneration({
      model: 'google/gemma-2-2b-it',
      inputs: input,
      num_return_sequences: 1,
    });

    return response
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export { genText };