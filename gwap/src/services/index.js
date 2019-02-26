import api from "./api";

export const signIn = async (user) => {
    try {
        const response = await api.oauth.post(`/token?grant_type=password&client_id=6d3ea1a2-75df-44aa-ad81-66f363db21b2&client_secret=NmQzZWExYTItNzVkZi00NGFhLWFkODEtNjZmMzYzZGIyMWIy&scope=read,write&username=${user.email}&password=${user.password}`);
        return response
    } catch (e) {
        console.error(e);
    }
}

export const signUp = async (user) => {
    try {
        const response = await api.oauth.post(`/token?grant_type=password&client_id=6d3ea1a2-75df-44aa-ad81-66f363db21b2&client_secret=NmQzZWExYTItNzVkZi00NGFhLWFkODEtNjZmMzYzZGIyMWIy&scope=read,write&username=${user.email}&password=${user.password}`);
        return response
    } catch (e) {
        console.error(e);
    }
}
