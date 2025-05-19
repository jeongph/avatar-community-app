import {useMutation, useQuery} from "@tanstack/react-query";
import {getMe, postLogin, postSignup} from "@/api/auth";
import {deleteSecureStore, getSecureStore, saveSecureStore} from "@/utils/secureStore";
import {router} from "expo-router";
import {removeHeader, setHeader} from "@/utils/header";
import queryClient from "@/api/queryClient";
import {useEffect} from "react";
import {queryKeys} from "@/constants";

function useGetMe() {
    // 가져올땐 useQuery, 보낼땐 useMutation (아래)
    const {data, isError, isSuccess} = useQuery({
        queryFn: getMe,
        queryKey: [queryKeys.AUTH, queryKeys.GET_ME] // queryKey 를 사용해서 login hook 에서 정보를 가져오는 쿼리를 실행시킬 수 있음
    });

    useEffect(() => {
        (async () => {
            if (isSuccess) {
                const accessToken = await getSecureStore("accessToken");
                setHeader("Authorization", `Bearer ${accessToken}`);
            }
        })();
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            // console.log("error")
            removeHeader("Authorization")
            deleteSecureStore("accessToken")
        }
    }, [isError]);

    return {data};
}

function useLogin() {
    // console.log("--useLogin function in")
    return useMutation({
        mutationFn: postLogin,
        onSuccess: async ({accessToken}) => {
            setHeader("Authorization", `Bearer ${accessToken}`);
            await saveSecureStore("accessToken", accessToken);
            console.log("accessToken: ", accessToken)

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
    const {data} = useGetMe();
    const loginMutation = useLogin();
    const signupMutation = useSignup();

    const logout = () => {
        removeHeader("Authorization")
        deleteSecureStore("accessToken")
        queryClient.resetQueries({queryKey: ["auth"]})
    };

    return {
        auth: {
            id: data?.id || "",
            nickname: data?.nickname || "",
        },
        loginMutation,
        signupMutation,
        logout
    };
}

export default useAuth;