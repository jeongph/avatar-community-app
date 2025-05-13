import {useMutation, useQuery} from "@tanstack/react-query";
import {getMe, postLogin, postSignup} from "@/api/auth";
import {saveSecureStore} from "@/utils/secureStore";
import {router} from "expo-router";
import {setHeader} from "@/utils/header";
import queryClient from "@/api/queryClient";

function useGetMe() {
    // 가져올땐 useQuery, 보낼땐 useMutation (아래)
    const {data} = useQuery({
        queryFn: getMe,
        queryKey: ["auth", "getMe"] // queryKey 를 사용해서 login hook 에서 정보를 가져오는 쿼리를 실행시킬 수 있음
    });

    return data;
}

function useLogin() {
    return useMutation({
        mutationFn: postLogin,
        onSuccess: async ({accessToken}) => {
            setHeader("Authorization", `Bearer ${accessToken}`);
            await saveSecureStore("accessToken", accessToken);
            queryClient.fetchQuery({queryKey: ["auth", "getMe"]})
            router.replace("/");
        },
        onError: () => {
            //
        },
    });
}

/*
React Query 에서 데이터를 가져올때는 useQuery를, 생성 수정 삭제는 useMutation 을 사용
 */
function useSignup() {
    return useMutation({
        mutationFn: postSignup,
        onSuccess: () => router.replace("/auth/login"),
        onError: () => {
            //
        },
    })
}

function useAuth() {
    const loginMutation = useLogin();
    const signupMutation = useSignup();

    return {loginMutation, signupMutation};
}

export default useAuth;