import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface TextInputComponentProps extends TextInputProps {
    type?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const styles = StyleSheet.create({
    Input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
})

const TextInputComponent: React.FC<TextInputComponentProps> = ({ type = 'default', style, placeholder, ...props }) => {
    return (
        <View>
            <TextInput placeholder={placeholder}
                style={[styles.Input, style]} // Allows external styling
                keyboardType={type}
                {...props} />
        </View>
    );
}

export default TextInputComponent;