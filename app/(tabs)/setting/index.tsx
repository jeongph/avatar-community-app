import {SafeAreaView, Text} from 'react-native';
import AuthRoute from "@/components/AuthRoute";
import useAuth from "@/hooks/queries/useAuth";

export default function SettingScreen() {
    const {logout} = useAuth();

    return (
        <AuthRoute>
            <SafeAreaView>
                <Text onPress={logout}>설정 스크린</Text>
            </SafeAreaView>
        </AuthRoute>
    );
}
