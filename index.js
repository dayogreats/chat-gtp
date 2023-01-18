import { Configuration, OpenAIApi } from "openai";


// const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});

console.log(response.data)
