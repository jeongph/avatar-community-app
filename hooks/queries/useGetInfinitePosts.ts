import {useInfiniteQuery} from "@tanstack/react-query";
import {getPosts} from "@/api/post";
import {queryKeys} from "@/constants";

function useGetInfinitePosts() {
    console.info("function useGetInfinitePosts in")

    return useInfiniteQuery({
        queryFn: ({pageParam}) => getPosts(pageParam),
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            // const lastPost = lastPage[lastPage.length - 1];
            // return lastPost ? allPages.length + 1 : undefined;
            return lastPage.last === true ? undefined : lastPage.number + 1;
        },
    });
}

export default useGetInfinitePosts;