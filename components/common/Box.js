import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("window");

const Box = ({ text }) => {
    return (
        <TouchableOpacity style={styles.box}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        height: (MAX_HEIGHT - 120) / 7,
        width: MAX_WIDTH / 7,
        backgroundColor: "#f0e1af",
        borderWidth: 1,
        borderColor: "#000000",
    },
});

export default Box;
