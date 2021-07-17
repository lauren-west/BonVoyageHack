import React from "react";
import {Button as NativeButton} from "react-native";

interface ButttonProps {
    text: string;
    onPress: () => void;
}

export default class Button extends React.Component<ButtonProps>{
    render(){
        return(
            <Button 
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        )
    }
}