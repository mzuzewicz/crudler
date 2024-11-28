import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "../components/screens/module-screens/ModuleListScreen";
import ModuleViewScreen from "../components/screens/module-screens/ModuleViewScreen";
import ModuleAddScreen from "../components/screens/module-screens/ModuleAddScreen";
import ModuleModifyScreen from "../components/screens/module-screens/ModuleModifyScreen";



const ModuleStack = () => {
	// Initialisations
	const Stack = createNativeStackNavigator();
	// State
	// Handlers
	// View
	return (
			<Stack.Navigator
				initialRouteName="ModuleListScreen"
				screenOptions={{
					headerStyle: { backgroundColor: "black" },
					headerTintColor: "white",
				}}
			>
				<Stack.Screen
					name="ModuleListScreen"
					component={ModuleListScreen}
					options={{ title: "List Modules" }}
				/>
				<Stack.Screen
					name="ModuleAddScreen"
					component={ModuleAddScreen}
					options={{ title: "Add Module" }}
				/>
				<Stack.Screen
					name="ModuleViewScreen"
					component={ModuleViewScreen}
					options={{ title: "View Module" }}
				/>
				<Stack.Screen
					name="ModuleModifyScreen"
					component={ModuleModifyScreen}
					options={{ title: "Modify Module" }}
				/>
			</Stack.Navigator>
	);
};

const styles = StyleSheet.create({});

export default ModuleStack;
