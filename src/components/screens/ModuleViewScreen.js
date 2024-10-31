import { StyleSheet } from "react-native";
import ModuleView from "../entity/modules/ModuleView";
import Screen from "../layout/Screen";

const ModuleViewScreen = ({ navigate, route }) => {
	//Initialisations
	const { module, onDelete } = route.params;

	//State
	//Handlers
	//View
	return (
		<Screen>
			<ModuleView module={module} onDelete={onDelete} />
		</Screen>
	);
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
