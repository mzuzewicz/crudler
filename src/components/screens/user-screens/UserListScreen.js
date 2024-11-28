import { StyleSheet, LogBox } from "react-native";
import { useState } from "react";
import Screen from "../../layout/Screen";
import initialUsers from "../../../data/users.js";
import UserList from "../../entity/user-entities/UserList.js";
import Icons from "../../UI/Icons.js";
import {Button, ButtonTray} from "../../UI/Button.js";


const UserListScreen = ({navigation}) => {
	// Initialisations
	LogBox.ignoreLogs([
		"Non-serializable values were found in the navigation state",
	]);

	// State
	const [users, setUsers] = useState(initialUsers);

	// Handlers
	const handleDelete = (user) => {
		setUsers(users.filter((item) => item.UserID !== user.UserID));
	}

	const handleAdd = (user) => setUsers([...users, user]);

	const handleModify = (updatedUser) =>
		setUsers(
			users.map((user) =>
				user.UserID === updatedUser.UserID ? updatedUser : user
			)
		);


	const onDelete = (user) => {
		handleDelete(user);
		navigation.goBack();
	};

	const onAdd = (user) => {
		handleAdd(user);
		navigation.goBack();
	}

	const onModify = (user) => {
		handleModify(user);
		navigation.navigate("UserListScreen");
	}

	const gotoViewScreen = (user) =>
		navigation.navigate("UserViewScreen", {user, onDelete, onModify});

	const gotoAddScreen = () => navigation.navigate("UserAddScreen", {onAdd});

	// View
	return (
		<Screen>
			<ButtonTray>
				<Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
			</ButtonTray>
			<UserList users={users} onSelect={gotoViewScreen} />
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default UserListScreen;
