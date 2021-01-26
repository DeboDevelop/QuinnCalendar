import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Calendar from "./components/pages/Calendar";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calendar" component={Calendar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
