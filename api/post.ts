import {CreatePostDto} from "@/types";
import axiosInstance from "@/api/axios";

async function createPost(body: CreatePostDto) {
    const {data} = await axiosInstance.post("/posts", body);

    return data;
}

export {createPost};