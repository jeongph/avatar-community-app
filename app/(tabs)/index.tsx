import {SafeAreaView, View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useState} from "react";

export default function HomeScreen() {
    const [text, setText] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>텍스트</Text>
            </View>
            <TextInput
                value=""
                onChangeText={(value) => setText(value)}
            />
            <Button
                title={"버튼"}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
    },
    text: {
        fontSize: 30,
        color: 'red',
    },
})