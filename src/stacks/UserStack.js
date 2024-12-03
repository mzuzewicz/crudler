import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserListScreen from "../components/screens/user-screens/UserListScreen.js";
import UserViewScreen from "../components/screens/user-screens/UserViewScreen.js";
import UserAddScreen from "../components/screens/user-screens/UserAddScreen.js";
import UserModifyScreen from "../components/screens/user-screens/UserModifyScreen.js";
import {HamburgerButton} from '../components/UI/Button.js';
import Icons from '../components/UI/Icons.js';


/*const userStackState = {
	type: 'stack',
	key: 'user-stack',
	routeNames: [
		'UserListScreen', 
		'UserAddScreen', 
		'UserViewScreen', 
		'UserModifyScreen'],
	routes: [
		{key: 'userList', name: 'User List'},
		{key: 'userAdd', name: 'Add User'},
		{key: 'userView', name: 'View User'},
		{key: 'userModify', name: 'Modify User'},
	]
}*/

const UserStack = ({navigation}) => {
	// Initialisations
	const Stack = createNativeStackNavigator();
	// State
	// Handlers
	// View
	return (
			<Stack.Navigator
				initialRouteName="UserListScreen"
				screenOptions={({navigation}) => ({
					headerStyle: { backgroundColor: "black"},
					headerTitleAlign: 'center',
					headerTintColor: "white",
					headerLeft: () => (<HamburgerButton icon={Icons.MenuIcon} onClick={() => {navigation.toggleDrawer();}}/>)
				})}
			>
				<Stack.Screen
					name="UserListScreen"
					component={UserListScreen}
					options={{ title: "List Users" }}
				/>
				<Stack.Screen
					name="UserAddScreen"
					component={UserAddScreen}
					options={{ title: "Add User" }}
				/>
				<Stack.Screen
					name="UserViewScreen"
					component={UserViewScreen}
					options={{ title: "View User" }}
				/>
				<Stack.Screen
					name="UserModifyScreen"
					component={UserModifyScreen}
					options={{ title: "Modify User" }}
				/>
			</Stack.Navigator>
	);
};

const styles = StyleSheet.create({});

export default UserStack;
