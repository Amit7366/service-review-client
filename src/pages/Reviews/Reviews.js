import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewBox from "./ReviewBox";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsByUser?userId=${user.uid}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, []);

  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 px-4">
      {
        reviews.map(review => <ReviewBox key={review._id} review={review}></ReviewBox>)
      }
    </div>
  );
};

export default Reviews;
