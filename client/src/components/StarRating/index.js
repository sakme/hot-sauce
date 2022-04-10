import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { FaPepperHot } from 'react-icons/fa';
 
export default function Stars(args) {

    const reviews = args;

    var ttl = 0;

    for (let i = 0; i < reviews.reviews.length; i++) {
        ttl = ttl + reviews.reviews[i].rating;
    }

    const rating = ttl / reviews.reviews.length;
  
    return (
      <div className='App star'>
        <Rating
          ratingValue={rating}
          readonly={true}
          fillColor={"#FF0000"}
          fullIcon={<FaPepperHot size={30} />}
          emptyIcon={<FaPepperHot size={30} />}
        />
      </div>
    )
};
