import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";


class NewsFeed {

    static async request(endpoint, data={}, method="get") {

        const url = `${BASE_URL}/${endpoint}`;
        // const headers = {authStuff}
        const params = (method === "get") ? data : {};

        try {
            return (await axios({url, method, data, params })).data;
        } catch (err) {
            console.error("API Error:", err.response);
        }
    }
    // API User Routes
    static async registerUser(data) {
        const res = await this.request(`users/register`, data, "post");
        return res;
    }

    static async getUsers() {
        const res = await this.request(`users`);
        return res.users
    }

    static async getPosts() {
        const res = await this.request(`posts`);
        return res.posts
    }
}

export default NewsFeed;