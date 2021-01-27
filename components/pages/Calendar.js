import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Box from "../common/Box";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
            calender: [],
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        };
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.getCalender = this.getCalender.bind(this);
        Dimensions.addEventListener("change", () => {
            this.forceUpdateHandler();
        });
    }
    componentDidMount() {
        this.setState({ ...this.state, mounted: true, calender: this.getCalender(this.state.month, this.state.year) });
    }
    componentWillUnmount() {
        this.setState({ ...this.state, mounted: false });
    }
    forceUpdateHandler() {
        if (this.state.mounted) {
            setTimeout(() => {
                this.forceUpdate();
            }, 500);
        }
    }
    getCalender(month, year) {
        let result = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0) {
            daysInMonth[1] = 29;
        }
        const blanks = new Date(year, month, 1).getDay();
        for (let i = 0; i < blanks; i++) {
            result.push("");
        }
        for (let i = 1; i <= daysInMonth[month]; i++) {
            result.push(i);
        }
        for (let i = 0; i < 42 - blanks - daysInMonth[month]; i++) {
            result.push("");
        }
        return result;
    }
    onSwipeUp(gestureState) {
        if (this.state.month === 0) {
            this.setState({
                ...this.state,
                month: 11,
                year: this.state.year - 1,
                calender: this.getCalender(11, this.state.year - 1),
            });
        } else {
            this.setState({
                ...this.state,
                month: this.state.month - 1,
                calender: this.getCalender(this.state.month - 1, this.state.year),
            });
        }
    }

    onSwipeDown(gestureState) {
        if (this.state.month === 11) {
            this.setState({
                ...this.state,
                month: 0,
                year: this.state.year + 1,
                calender: this.getCalender(0, this.state.year + 1),
            });
        } else {
            this.setState({
                ...this.state,
                month: this.state.month + 1,
                calender: this.getCalender(this.state.month + 1, this.state.year),
            });
        }
    }
    onSwipeLeft(gestureState) {
        if (this.state.month === 0) {
            this.setState({
                ...this.state,
                month: 11,
                year: this.state.year - 1,
                calender: this.getCalender(11, this.state.year - 1),
            });
        } else {
            this.setState({
                ...this.state,
                month: this.state.month - 1,
                calender: this.getCalender(this.state.month - 1, this.state.year),
            });
        }
    }

    onSwipeRight(gestureState) {
        if (this.state.month === 11) {
            this.setState({
                ...this.state,
                month: 0,
                year: this.state.year + 1,
                calender: this.getCalender(0, this.state.year + 1),
            });
        } else {
            this.setState({
                ...this.state,
                month: this.state.month + 1,
                calender: this.getCalender(this.state.month + 1, this.state.year),
            });
        }
    }
    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
        };
        return (
            <GestureRecognizer
                onSwipeUp={state => this.onSwipeUp(state)}
                onSwipeDown={state => this.onSwipeDown(state)}
                onSwipeLeft={state => this.onSwipeLeft(state)}
                onSwipeRight={state => this.onSwipeRight(state)}
                config={config}
                style={{
                    flex: 1,
                }}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Text style={styles.txt}>
                                {months[this.state.month] + " "},{" " + this.state.year}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}>Today</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.main}>
                        {this.state.calender.map((item, index) => {
                            return <Box key={index} text={item} />;
                        })}
                    </View>
                </View>
            </GestureRecognizer>
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
