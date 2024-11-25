import { StyleSheet } from "react-native";
import ModuleView from "../entity/modules/ModuleView";
import Screen from "../layout/Screen";

const ModuleViewScreen = ({ navigation, route }) => {
	//Initialisations
	const { module, onDelete, onModify } = route.params;

	//State
	//Handlers
	const gotoModifyScreen = () =>
		navigation.navigate("ModuleModifyScreen", { module, onModify });
	//View
	return (
		<Screen>
			<ModuleView
				module={module}
				onDelete={onDelete}
				onModify={gotoModifyScreen}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
