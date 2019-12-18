import React from 'react';
import {StyleSheet, Text,} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <Text style={styles.paragraph}>Hello World</Text>
        </>
    );
};

const styles = StyleSheet.create({
    paragraph: {
        color: "blue",
        margin: 2,
        padding: 2,
    }
});

export default App;
