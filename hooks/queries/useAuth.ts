import {useMutation} from "@tanstack/react-query";
import {postLogin, postSignup} from "@/api/auth";
import {saveSecureStore} from "@/utils/secureStore";
import {router} from "expo-router";
import {setHeader} from "@/utils/header";

function useLogin() {
    return useMutation({
        mutationFn: postLogin,
        onSuccess: async ({accessToken}) => {
            setHeader("Authorization", `Bearer ${accessToken}`);
            await saveSecureStore("accessToken", accessToken);
            // 내 정보를 가져오는 훅 호출
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