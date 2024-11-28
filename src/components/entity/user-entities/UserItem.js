import { Pressable, StyleSheet, Text, View } from "react-native";

const UserItem = ({user, onSelect}) => {
    //initialisations
    //state
    //handlers
    const handleSelect = () => onSelect(user);
    //view
    return (
        <Pressable onPress={handleSelect}>
            <View style={styles.item}>
                <Text style={styles.text}>
                    {user.UserFirstname} {user.UserLastname}
                </Text>
            </View>
        </Pressable>
    )


};

const styles = StyleSheet.create({
	item: {
		paddingVertical: 15,
		borderTopWidth: 1,
		borderColor: "lightgray",
	},

	text: {
		fontSize: 16,
	},
});

export default UserItem;