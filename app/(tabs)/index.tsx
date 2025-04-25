import {
    SafeAreaView,
    Text
} from 'react-native';
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Text>This is Home</Text>
            <CustomButton label="버튼" onPress={() => {
                router.push("/auth")
            }}/>
        </SafeAreaView>
    );
}
