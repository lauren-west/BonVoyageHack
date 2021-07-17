import React from "react";
import {Button as NativeButton} from "react-native";

interface ButttonProps {
    text: string;
    onPress: () => void;
    color: string
    
}

export default class Button extends React.Component<ButtonProps>{
    render(){
        return(
            <Button 
                onPress={this.props.onPress}
                title={this.props.text}
                color={this.props.color}
                accessibilityLabel="This is a button"
            />
        )
    }
}