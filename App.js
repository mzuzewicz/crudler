import "./src/gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleStack from "./src/stacks/ModuleStack";
import UserStack from "./src/stacks/UserStack";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export const App = () => {
	//Initialisations
	//State
	//Handlers
	//View
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="View Modules" component={ModuleStack} />
				<Drawer.Screen name="View Users" component={UserStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
	<ModuleStack />;
};

export default App;
