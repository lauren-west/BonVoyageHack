import React from "react";

interface MealWrittenReviewState {
  message: string;
}

export default class MealWrittenReviewState extends React.Component<
  {},
  MealWrittenReviewState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
        message: "Write a Review (Optional)",
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
