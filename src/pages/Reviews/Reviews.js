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

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete this review');
    if (proceed) {
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining);
                }
            })
    }
}

  return (
    <div>
      {
        reviews.length > 0 ? 
        <div className="my-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 px-4">
        {reviews.map(review => <ReviewBox key={review._id} review={review} handleDelete={handleDelete}></ReviewBox>)}
        </div>
        :
        <p className="text-orange-500 font-bold text-center">No review Found</p>
      }
    </div>
  );
};

export default Reviews;
