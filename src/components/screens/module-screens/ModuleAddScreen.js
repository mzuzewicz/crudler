import Screen from "../../layout/Screen";
import ModuleForm from "../../entity/module-entities/ModuleForm.js";

const ModuleAddScreen = ({ navigation, route }) => {
	//Initialisations
	const { onAdd } = route.params;

	//State

	//Handlers
	const handleCancel = navigation.goBack;

	//View
	return (
		<Screen>
			<ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
		</Screen>
	);
};

export default ModuleAddScreen;