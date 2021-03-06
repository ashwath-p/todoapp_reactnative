import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'skyblue',
        padding: 38
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 27,
        fontWeight: 'bold'
    }
});