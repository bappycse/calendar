
import axios from "axios";

export default axios.create({
    baseURL: "https://api.photoeditscenter.com/",
    headers: {
        "Content-type": "application/json",
    }
});