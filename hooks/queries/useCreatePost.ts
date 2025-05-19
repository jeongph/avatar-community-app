import {useMutation} from "@tanstack/react-query";
import {createPost} from "@/api/post";
import {router} from "expo-router";
import queryClient from "@/api/queryClient";
import {queryKeys} from "@/constants";

function useCreatePost() {
    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            router.replace("/");
            queryClient.invalidateQueries({queryKey: [queryKeys.POST, queryKeys.GET_POSTS]}) // 20초가 지나기 전에 게시글 등록을 또 하면 안보이니까, 상태를 업데이트 하기위해 사용함
        }
    });
}

export default useCreatePost;