const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    reviewText: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;
