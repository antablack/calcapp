import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

const Input = (props) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={props.onChangeText}
            placeholder={String(props.defaultValue.toFixed(1))}
            value={props.value == 0 ? "" : props.value}
            maxLength={3} />
        <Text style={styles.label}>
            {props.rate * 100}%
        </Text>
    </View>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderColor: "#707070",
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 999,
        height: 45,
        width: 300,
        marginTop: 50
    },
    input: {
        height: 45,
        fontSize: 23,
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "courier"
    },
    label: {
        position: "absolute",
        fontSize: 14,
        fontFamily: "regular",
        right: 10,
        bottom: 10,
        fontFamily: "courier"
    }
})

export default Input;