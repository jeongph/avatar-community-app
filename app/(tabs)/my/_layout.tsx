import {Stack} from "expo-router";
import {colors} from "@/constants"; // 탭뷰가 아닌 곳은 기본적으로 스택을 사용

export default function MyLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: colors.WHITE,
                }
            }}
        >
            <Stack.Screen
                name={"index"}
                options={{
                    headerShown: false,
                    title: "내정보",
                }}
            />
        </Stack>
    );
}