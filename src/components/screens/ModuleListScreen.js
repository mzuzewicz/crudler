import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
	//Initialisations
	const modules = initialModules;

	//State

	//Handlers
	const handleSelect = (module) => alert(`Item ${module.ModuleCode} selected`);

	//View
	return (
		<Screen>
			<ModuleList modules={modules} onSelect={handleSelect} />
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default ModuleListScreen;
