import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginScreen from "./screens/LoginScreem";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const Navigator = () =>{

    return(
        <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:"transparent"
                    },
                    headerTintColor: 'red',
                    headerTransparent: true,
                    headerTitle:'',
                    headerLeftContainerStyle:{
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    )
}

export default Navigation;