import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder='add todo'
                onChangeText={(val) => setText(val)}
            />
            <Button title='add' onPress={() => { submitHandler(text) }} color='skyblue' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});