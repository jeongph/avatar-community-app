import axios from "axios";
import {getSecureStore} from "@/utils/secureStore";

type RequestUser = {
    email: string;
    password: string;
}

async function postSignup(body: RequestUser): Promise<void> {
    const {data} = await axios.post("http://localhost:8080/auth/signup", body)

    return data; // const data -> data.data == const {data} -> data
}

async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
    const {data} = await axios.post("http://localhost:8080/auth/login", body)

    return data;
}

async function getMe() {
    const accessToken = await getSecureStore("accessToken")
    const {data} = await axios.get("http://localhost:8080/auth/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return data;
}

export {postSignup, postLogin, getMe};