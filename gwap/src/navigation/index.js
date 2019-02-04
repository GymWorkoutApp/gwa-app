import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import RepositoryList from "../components/RepositoryList";
import "../config/reactotron";
import SignInScreen from "../screens/signin";
import HomeScreen from '../screens/home';

const AuthenticationNavigator = createStackNavigator(
    {
        home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            }
        },
        signIn: {
            screen: SignInScreen,
            navigationOptions: {
                header: null,
            }
        },
        // forgotPassword: ForgotPasswordScreen,
        // register: RegisterScreen,
    },
    {
        initialRouteName: "home"
    });

const StudentNavigator = createBottomTabNavigator(
    {
        home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: "home"
    });

const GymNavigator = createBottomTabNavigator(
    {
        home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: "home"
    });

const TeacherNavigator = createBottomTabNavigator(
    {
        home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: "home"
    });

const AppNavigator = createStackNavigator(
    {
        auth: {
            screen: AuthenticationNavigator,
            navigationOptions: {
                header: null,
            }
        },
        repositories: {
            screen: RepositoryList
        },
        student: {
            screen: StudentNavigator
        },
        gym: {
            screen: GymNavigator
        },
        teacher: {
            screen: TeacherNavigator
        },
    },
    {
        initialRouteName: "auth"
    });

export default AppNavigator
