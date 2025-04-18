if (!process.env.API_BASE_URL) {
    throw new Error('API_BASE_URL is not defined');
}

if (!process.env.BEARER_TOKEN) {
    throw new Error('BEARER_TOKEN is not defined');
}

export const API_BASE_URL = process.env.API_BASE_URL;
export const BEARER_TOKEN = process.env.BEARER_TOKEN;