import { json, type RequestEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { OPENAI_API_KEY, SERPAPI_API_KEY } from '$env/static/private';
import { OpenAI } from 'langchain/llms/openai';

export const POST = async (event: RequestEvent) => {
	// const requestBody = await event.request.json();
	// const {} = requestBody;

	// if (false) throw error(404, 'Invalid request');

	console.log('aloha');

	const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 });
	const res = await model.call(
		'What would be a good company name a company that makes colorful socks?'
	);

	return json({ res });
};
