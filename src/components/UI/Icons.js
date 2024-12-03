import { MaterialIcons } from "@expo/vector-icons";


const Icons = {};

const Add = () => <MaterialIcons name="add" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const ModuleIcon = ({focused, size}) => (<MaterialIcons name="my-library-books" size={24} color={focused ? '#7cc' : '#ccc'} />);
const UserIcon = ({focused, size}) => (<MaterialIcons name="people" size={24} color={focused ? '#7cc' : '#ccc'} />);
const MenuIcon = () => (<MaterialIcons name="menu" size={24} color="white" />);


// Compose
Icons.Add = Add;
Icons.Edit = Edit;
Icons.Delete = Delete;
Icons.ModuleIcon = ModuleIcon;
Icons.UserIcon = UserIcon;
Icons.MenuIcon = MenuIcon;


export default Icons;