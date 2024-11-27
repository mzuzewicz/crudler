import "./src/gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleStack from "./src/stacks/ModuleStack";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const App = () => {
	//Initialisations
	//State
	//Handlers
	//View
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="ModuleStack" component={ModuleStackNavigator} />
		</Drawer.Navigator>
	);
	<ModuleStack />;
};

export default App;
