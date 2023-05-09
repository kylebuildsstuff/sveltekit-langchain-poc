import { json, type RequestEvent } from '@sveltejs/kit';
import { OPENAI_API_KEY, SERPAPI_API_KEY } from '$env/static/private';
import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { initializeAgentExecutorWithOptions } from 'langchain/agents';

export const POST = async (event: RequestEvent) => {
	const requestBody = await event.request.json();
	const { input = '' } = requestBody;

	// Get your model
	const model = new OpenAI({
		openAIApiKey: OPENAI_API_KEY,
		temperature: 0,
		modelName: 'text-davinci-003'
	});

	// Get your tools
	// https://js.langchain.com/docs/api/tools/interfaces/SerpAPIParameters
	const tools = [
		new SerpAPI(SERPAPI_API_KEY, {
			// Where you want the search to originate from
			location: 'Austin,Texas,United States',
			// host language
			hl: 'en',
			// geolocation
			gl: 'us'
		})
	];

	// Get your agent
	const executor = await initializeAgentExecutorWithOptions(tools, model, {
		agentType: 'zero-shot-react-description'
	});

	// Do stuff
	const result = await executor.call({ input });

	console.log(`Result: ${JSON.stringify(result, null, 2)}`);

	return json({ result: result?.output || '' });
};
