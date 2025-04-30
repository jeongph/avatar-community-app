import {Image, SafeAreaView, StyleSheet, View} from "react-native";
import CustomButton from "@/components/CustomButton";
import {Link, router} from "expo-router";

export default function AuthScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("@/assets/images/logo-4x.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.buttonContainer}>
                <CustomButton label="이메일 로그인" onPress={() => router.push("/auth/login")}/>
                <Link href={"/auth/signup"} style={styles.signupText}>이메일로 가입하기</Link>
            </View>
        </SafeAreaView>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
    },
    buttonContainer: {
        paddingHorizontal: 32,
        flex: 1,
    },
    logo: {
        width: 224,
        height: 224,
        // flex: 1,
        // resizeMode: 'cover', // or 'stretch'
    },
    signupText: {
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 20,
    }
});