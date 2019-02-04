import api from "./api";

export const signIn = async (user) => {
    try {
        console.log(`url: ${api.oauth2.baseURL}`)
        const response = await api.oauth2.post(`/token?grant_type=password&scope=read,write&username=${user.email}&password=${user.password}`);
        console.log(response);
        const data = await response.toJSON();
        return data;
    } catch (e) {
        console.log(e);
    }
}
