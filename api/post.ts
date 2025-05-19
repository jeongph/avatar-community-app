import {CreatePostDto, Post} from "@/types";
import axiosInstance from "@/api/axios";

async function createPost(body: CreatePostDto) {
    const {data} = await axiosInstance.post("/posts", body);

    return data;
}

async function getPosts(page = 1): Promise<Post []> {
    const {data} = await axiosInstance.get(`/posts?page=${page}`);
    console.log(data)

    return data;
}

export {createPost, getPosts};