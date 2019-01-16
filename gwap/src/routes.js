import { createStackNavigator, createAppContainer} from 'react-navigation';

import MainPage from './pages/main';

const Navigator = createStackNavigator({
    MainPage
}, {
    nagiationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    }
});

export default createAppContainer(Navigator);
