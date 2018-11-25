import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient"
const Button = (props) => (
    <TouchableOpacity onPress={props.onClick}>
        <View
            style={styles.button}
        >
            <Text style={styles.label}>Calcular</Text>
        </View>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#571B1B",
        height: 48,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        borderRadius: 999,
        marginTop: 30
    },
    label: {
        color: 'white',
        fontSize: 20,
        fontFamily: "courier"
    }
})
export default Button


