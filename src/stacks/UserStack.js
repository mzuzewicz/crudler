import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserListScreen from "../components/screens/user-screens/UserListScreen.js";
import UserViewScreen from "../components/screens/user-screens/UserViewScreen.js";
import UserAddScreen from "../components/screens/user-screens/UserAddScreen.js";
import UserModifyScreen from "../components/screens/user-screens/UserModifyScreen.js";

const Stack = createNativeStackNavigator();

const UserStack = () => {
	// Initialisations
	// State
	// Handlers
	// View
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="UserListScreen"
				screenOptions={{
					headerStyle: { backgroundColor: "black" },
					headerTintColor: "white",
				}}
			>
				<Stack.Screen
					name="UserListScreen"
					component={UserListScreen}
					options={{ title: "List Modules" }}
				/>
				<Stack.Screen
					name="UserAddScreen"
					component={UserAddScreen}
					options={{ title: "Add Module" }}
				/>
				<Stack.Screen
					name="UserViewScreen"
					component={UserViewScreen}
					options={{ title: "View Module" }}
				/>
				<Stack.Screen
					name="UserModifyScreen"
					component={UserModifyScreen}
					options={{ title: "Modify Module" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default UserStack;
