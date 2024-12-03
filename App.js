import "./src/gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ModuleStack from "./src/stacks/ModuleStack";
import UserStack from "./src/stacks/UserStack";
import Icons from "./src/components/UI/Icons";


const Drawer = createDrawerNavigator();



export const App = () => {
	//Initialisations
	//State
	//Handlers
	//View
	return (
		<NavigationContainer>
			<Drawer.Navigator
			screenOptions={{ headerShown: false }}>
				<Drawer.Screen 
					name="View Modules" 
					component={ModuleStack} 
					options={{
						drawerIcon:Icons.ModuleIcon
					}}
				/>
				<Drawer.Screen 
					name="View Users" 
					component={UserStack} 
					options={{
						drawerIcon:Icons.UserIcon
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
