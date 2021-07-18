import React from "react";
import {TextInput} from "react-native";

interface MealWrittenReviewState {
  text: string;
}

export default class MealWrittenReview extends React.Component<
  {},
  MealWrittenReviewState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
        text: "Write a Review (Optional)",
    };
  }

  onChangeText(message: string) {
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <TextInput
        onChangeText={onChangeText}
        value={text}
      />
    );
  }
}
