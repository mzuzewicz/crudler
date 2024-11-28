import { StyleSheet, Text, View } from "react-native";
import Screen from "../../layout/Screen";
import UserForm from "../../entity/user-entities/UserForm";

const UserModifyScreen = ({navigation, route}) => {
	// 
	const { user, onModify } = route.params;
	// State
	// Handlers
	const handleCancel = navigation.goBack;
	// View
	return (
		<Screen>
			<UserForm
				originalUser={user}
				onSubmit={onModify}
				onCancel={handleCancel}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({});

export default UserModifyScreen;

