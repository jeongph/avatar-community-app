import {Pressable, SafeAreaView, StyleSheet} from 'react-native';
import FeedList from "@/components/FeedList";
import {colors} from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from "expo-router";

export default function HomeScreen() {
    const {auth} = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <FeedList/>
            {auth.id && (
                <Pressable
                    style={styles.writeButton}
                    onPress={() => router.push("/post/write")} // 개발 순서가 뭔가 잘못된거같음 ;
                >
                    <Ionicons
                        name={"pencil"}
                        size={30}
                        color={colors.WHITE}
                    />
                </Pressable>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    writeButton: {
        position: "absolute",
        bottom: 16,
        right: 16,
        backgroundColor: colors.ORANGE_600,
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: colors.BLACK,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 2, // android
    }
});
