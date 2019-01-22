import api from "./api";

export const signIn = async (user) => {
    try {
        const response = await api.auth.post('/users', user);
        const data = await response.toJSON();
        return data;
    } catch (e) {
        console.log(e);
    }
}
