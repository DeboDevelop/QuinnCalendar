import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const window = Dimensions.get("window");

const Box = ({ text }) => {
    const [dimensions, setDimensions] = useState(window);
    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    const getStyle = () => {
        return {
            height: (dimensions.height - 120) / 7,
            width: dimensions.width / 7,
            backgroundColor: "#f0e1af",
            borderWidth: 1,
            borderColor: "#000000",
        };
    };
    const onChange = ({ window }) => {
        setDimensions(window);
    };
    return (
        <TouchableOpacity style={getStyle()}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    // box: {
    //     height: (MAX_HEIGHT - 120) / 7,
    //     width: MAX_WIDTH / 7,
    //     backgroundColor: "#f0e1af",
    //     borderWidth: 1,
    //     borderColor: "#000000",
    // },
});

export default Box;
