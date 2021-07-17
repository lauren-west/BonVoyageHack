import React from "react";


interface MealDescriptionProps {
    description: string;
}

export default class MealDescription extends React.Component<MealDescriptionProps, {}> {
  constructor(props: MealDescriptionProps) {
    super(props);
  }

  render(){
      return(
        <Text>{this.props.description}</Text>
      )
  }

}