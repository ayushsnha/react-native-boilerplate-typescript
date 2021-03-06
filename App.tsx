import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.text}>React Native Boilerplate</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#B58DF3',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 28,
        fontWeight: '500',
        color: '#1329f2',
    },
});

export default App;
