import React, { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";

const window = Dimensions.get("window");

const Box = ({ text, month, year }) => {
    const [dimensions, setDimensions] = useState(window);
    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    const getStyle = () => {
        let styleObj = {
            height: (dimensions.height - 120) / 7,
            width: dimensions.width / 7,
            backgroundColor: "#f0e1af",
            borderWidth: 1,
            borderColor: "#000000",
        };
        if (text === "Sun") {
            styleObj["backgroundColor"] = "#ff0000";
        } else if (
            text === "Mon" ||
            text === "Tue" ||
            text === "Wed" ||
            text === "Thu" ||
            text === "Fri" ||
            text === "Sat"
        ) {
            styleObj["backgroundColor"] = "#0000ff";
        } else if (text === "") {
            styleObj["backgroundColor"] = "#ababab";
        }
        const currDay = new Date().getDate();
        const currMonth = new Date().getMonth();
        const currYear = new Date().getFullYear();
        if (currDay === text && currMonth === month && currYear === year) {
            styleObj["borderColor"] = "#1009e0";
            styleObj["backgroundColor"] = "#26f0dc";
        }
        return styleObj;
    };
    const gettxt = () => {
        if (
            text === "Sun" ||
            text === "Mon" ||
            text === "Tue" ||
            text === "Wed" ||
            text === "Thu" ||
            text === "Fri" ||
            text === "Sat"
        ) {
            return {
                color: "#ffffff",
            };
        } else {
            return {
                color: "#000000",
            };
        }
    };
    const onChange = ({ window }) => {
        setDimensions(window);
    };
    return (
        <TouchableOpacity style={getStyle()}>
            <Text style={gettxt()}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Box;
