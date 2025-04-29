import React, {ReactNode} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {colors} from "@/constants";

interface ProfileProps {
    onPress: () => void;
    nickname: string;
    imageUrl?: string;
    createdAt: string;
    option?: ReactNode;
}

function Profile(
    {onPress, nickname, imageUrl, createdAt, option}: ProfileProps
) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.profileContainer} onPress={onPress}>
                <Image
                    source={imageUrl ? {url: imageUrl} : require('@/assets/images/default-profile.png')}
                    style={styles.avatarImage}
                />
                <View style={{gap: 4}}>
                    <Text style={styles.nicknameText}>{nickname}</Text>
                    <Text style={styles.createdAtText}>{createdAt}</Text>
                </View>
            </Pressable>
            {option}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.GRAY_300,
    },
    nicknameText: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.BLACK,
    },
    createdAtText: {
        fontSize: 14,
        color: colors.GRAY_500,
    },
});

export default Profile;