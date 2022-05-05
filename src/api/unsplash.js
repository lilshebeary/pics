import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5WV44fuUy0IgklXiyT9rGV9TWC73_Y6Io5Rab9IRJ6o'
    }
});