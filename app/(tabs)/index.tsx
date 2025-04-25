import {SafeAreaView, View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useState} from "react";

export default function HomeScreen() {
    const [text, setText] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.parent}>
                <View style={styles.container}>
                    <Text style={styles.text}>텍스트</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.text}>텍스트</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: 'yellow',
    },
    container2: {
        backgroundColor: 'blue',
    },
    text: {
        fontSize: 30,
        color: 'red',
    },
})