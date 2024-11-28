import { StyleSheet } from "react-native";
import Screen from "../../layout/Screen";
import ModuleForm from "../../entity/module-entities/ModuleForm.js";

const ModuleModifyScreen = ({ navigation, route }) => {
	//Initialisations
	const { module, onModify } = route.params;
	//State
	//Handlers
	const handleCancel = navigation.goBack;
	//View
	return (
		<Screen>
			<ModuleForm
				originalModule={module}
				onSubmit={onModify}
				onCancel={handleCancel}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
