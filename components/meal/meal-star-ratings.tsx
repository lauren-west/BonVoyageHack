import React from "react";
import StarRating from "react-native-star-rating";

interface MealStarRatingState {
  starCount: number;
}

export default class MealStarRating extends React.Component<
  {},
  MealStarRatingState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating: number) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}
