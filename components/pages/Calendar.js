import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class Calendar extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text> Hello World!!! </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Calendar;
