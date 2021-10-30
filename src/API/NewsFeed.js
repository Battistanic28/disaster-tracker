import axios from "axios";

const BASE_URL = process.env.DATABASE_URL || "http://localhost:5000";


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
        const res = await this.request(`auth/register/`, data, "post");
        return res;
    }

    static async loginUser(data) {
        const res = await this.request(`auth/token/`, data, "post");
        return res;
    }
    
    static async getUsers() {
        const res = await this.request(`users`);
        return res.users
    }

    static async getUserInfo(username) {
        const res = await this.request(`users/${username}`);
        return res.user
    }

    // API User Routes
    static async getPosts() {
        const res = await this.request(`posts`);
        return res.posts
    }

    static async getPostsByEventId(id) {
        const res = await this.request(`posts/${id}`);
        return res.posts
    }

    static async createPost(data) {
        const res = await this.request(`posts`, data, "post");
        return res.post
    }

    // API Replies Routes
    static async getRepliesByPostId(id) {
        const res = await this.request(`replies/${id}`);
        return res.posts
    }

    static async createReply(data) {
        const res = await this.request(`replies`, data, "post");
        return res.post
    }

}

export default NewsFeed;