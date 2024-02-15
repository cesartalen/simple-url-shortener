const API_ROOT_URL = "http://127.0.0.1:3000/"

export const SHORT_TO_ORIGINAL = (id: any) => `${API_ROOT_URL}s/${id}`
export const GET_URL_STATS = (id: any) => `${API_ROOT_URL}stats/${id}`
export const SHORTEN_URL = `${API_ROOT_URL}shorten`