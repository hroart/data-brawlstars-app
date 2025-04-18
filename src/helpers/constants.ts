if (!process.env.API_BASE_URL) {
    throw new Error('La variable API_BASE_URL no está definida');
}

if (!process.env.BEARER_TOKEN) {
    throw new Error('La variable BEARER_TOKEN no está definida');
}

export const API_BASE_URL = process.env.API_BASE_URL;
export const BEARER_TOKEN = process.env.BEARER_TOKEN;