import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "../components/screens/module-screens/ModuleListScreen";
import ModuleViewScreen from "../components/screens/module-screens/ModuleViewScreen";
import ModuleAddScreen from "../components/screens/module-screens/ModuleAddScreen";
import ModuleModifyScreen from "../components/screens/module-screens/ModuleModifyScreen";
import {HamburgerButton} from '../components/UI/Button.js';
import Icons from '../components/UI/Icons.js';


const Stack = createNativeStackNavigator();

const ModuleStack = () => {
	// Initialisations
	// State
	// Handlers
	// View
	return (
			<Stack.Navigator
				initialRouteName="ModuleListScreen"
				screenOptions={({navigation}) => ({
					headerStyle: { backgroundColor: "black" },
					headerTitleAlign: 'center',
					headerTintColor: "white",
					headerLeft: () => (<HamburgerButton icon={Icons.MenuIcon} onClick={() => {navigation.toggleDrawer();}}/>)
				})}
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
