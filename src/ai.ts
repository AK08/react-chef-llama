// import Anthropic from "@anthropic-ai/sdk";
import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// const anthropic = new Anthropic({
//   apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY as string,
//   dangerouslyAllowBrowser: true,
// });

// export async function getRecipeFromChefClaude(ingredientsArr: string[]) {
//   const ingredientsString = ingredientsArr.join(", ");

//   const msg = await anthropic.messages.create({
//     model: "claude-3-haiku-20240307",
//     max_tokens: 1024,
//     system: SYSTEM_PROMPT,
//     messages: [
//       {
//         role: "user",
//         content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
//       },
//     ],
//   });

//   const content = msg.content[0];
//   if (content.type === "text") {
//     return content.text;
//   }
//   return "";
// }

const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN as string);

export async function getRecipeFromLlama(ingredientsArr: string[]) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await hf.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    return response.choices[0].message.content;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}
