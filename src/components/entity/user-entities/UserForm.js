import { StyleSheet } from "react-native";
import { useState } from "react";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultUser = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    UserImageURL: null,
    UserType: null,
    UserYear: null,
}

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
    //Initialisations
    defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
    defaultUser.UserImageURL = 
    "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=";
    
    const types = [
        {value: "Student", label: "Student"},
        {value: "Staff", label:"Staff"},
    ];
    
    //State
    const [user, setUser] = useState(originalUser || defaultUser);

    //Handlers
    const handleChange = (field, value) =>
        setUser({...user, [field]: value});
    
    const handleSubmit = () => onSubmit(user);

    //View
    const submitLabel = originalUser ? "Modify" : "Add";
    const submitIcon = originalUser ? <Icons.Edit/> : <Icons.Add/>;

    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel={submitLabel}
            submitIcon={submitIcon}
        >
            <Form.InputText
                label="User ID"
                value={user.UserID}
                onChange={(value) => handleChange("UserID", value)}
            />
            <Form.InputText
                label="First Name"
                value={user.UserFirstname}
                onChange={(value) => handleChange("UserFirstname", value)}
            />
            <Form.InputText
                label="Last Name"
                value={user.UserLastname}
                onChange={(value) => handleChange("UserLastname", value)}
            />
            <Form.InputText
                label="User Email"
                value={user.UserEmail}
                onChange={(value) => handleChange("UserEmail", value)}
            />
            <Form.InputText
                label="User Image URL"
                value={user.UserImageURL}
                onChange={(value) => handleChange("UserImageURL", value)}
            />
            <Form.InputSelect
                label="User Type"
                prompt="Select User Type..."
                options={types}
                value={user.UserType}
                onChange={(value) => handleChange("UserType", value)}
            />
            <Form.InputText
                label="User Year (leave blank if Staff)"
                value={user.UserYear}
                onChange={(value) => handleChange("UserYear", value)}
            />
        </Form>
    );
};

const styles = StyleSheet.create({});

export default UserForm;