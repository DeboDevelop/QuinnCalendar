import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calender: Array(49).fill(0),
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        };
    }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Text style={styles.txt}>December</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txt}>Today</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    {/* {this.state.calender.map((item, index) => {
                        return <Box key={index} />;
                    })} */}
                    <Text>{this.state.day}</Text>
                    <Text>{this.state.month}</Text>
                    <Text>{this.state.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4287f5",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        height: 40,
        paddingTop: 5,
        paddingBottom: 5,
    },
    txt: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 20,
        color: "#ffffff",
    },
    btn: {
        backgroundColor: "#ff0000",
        marginRight: 10,
        borderRadius: 10,
    },
    main: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

export default Calendar;
