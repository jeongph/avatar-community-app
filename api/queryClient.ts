import {QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient({ // new 낯설다 ,,
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 20 * 1000, // 동일한 요청을 20초 내에 다시 요청하지 않음
        },
        mutations: {
            retry: false,
        },
    },
});

export default queryClient;