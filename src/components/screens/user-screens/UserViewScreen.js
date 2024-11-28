import { StyleSheet } from "react-native";
import UserView from "../../entity/user-entities/UserView";
import Screen from "../../layout/Screen";

const UserViewScreen = ({navigation, route}) => {
	// Initialisations
	const {user, onDelete, onModify } = route.params;
	// State
	// Handlers
	const gotoModifyScreen = () => 
		navigation.navigate("UserModifyScreen", {user, onModify});

	// View
	return (
		<Screen>
			<UserView
				user={user}
				onDelete={onDelete}
				onModify={gotoModifyScreen}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({});

export default UserViewScreen;
