import StarRating from "react-native-star-rating";
import { Component } from "react";

interface MealStarRatingState {
  starCount: number;
}

export default class MealStarRating extends Component<{}, MealStarRatingState> {
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
