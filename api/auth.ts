import {getSecureStore} from "@/utils/secureStore";
import axiosInstance from "@/api/axios";
import {Profile} from "@/types";

type RequestUser = {
    email: string;
    password: string;
}

async function postSignup(body: RequestUser): Promise<void> {
    console.log("request body", body, "")
    const {data} = await axiosInstance.post("/auth/signup", body)

    return data; // const data -> data.data == const {data} -> data
}

async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
    const {data} = await axiosInstance.post("/auth/login", body)

    return data;
}

async function getMe(): Promise<Profile> {
    console.log("access token: ")
    const accessToken = await getSecureStore("accessToken")
    const {data} = await axiosInstance.get("/auth/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return data;
}

export {postSignup, postLogin, getMe};