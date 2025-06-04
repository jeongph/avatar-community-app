import {CreatePostDto, Post, PagePost} from "@/types";
import axiosInstance from "@/api/axios";

async function createPost(body: CreatePostDto) {
    const {data} = await axiosInstance.post("/posts", body);

    return data;
}

async function getPosts(page = 0): Promise<PagePost> {
    const {data} = await axiosInstance.get(`/posts?page=${page}`);

    return data;
}

export {createPost, getPosts};