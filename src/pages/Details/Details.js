import {
  Avatar,
  Badge,
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "./ReviewCard";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, image, price, ratings, details } = useLoaderData();
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/reviewsById?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  },[reviews]);



  const addReview = (event) => {
    event.preventDefault();

    const form = event.target;

    const text = form.text.value;
    const rating = form.rating.value;

    const review = {
      serviceId: _id,
      serviceName: title,
      userId: user.uid,
      userName:user.displayName,
      userImg: user.photoURL,
      ratings:rating,
      text: text,
    };

    fetch('http://localhost:5000/addReview',{
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(review)
    }) 
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        if(data.acknowledged){
            toast.success('Review Added Successfully')
            form.reset();
            const newReview = [...reviews,review];
          
            setReviews(newReview);
            
        }
    })
    .catch(er => console.error(er));
  };
  return (
    <div className="w-full rounded-md shadow-md flex flex-col pb-4 mb-6">
      <div>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="" className="rounded-t-md w-full" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="px-4 pt-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {details}
        </p>
        <div className="flex flex-wrap gap-2 my-4">
          <Badge color="failure" size="sm">
            ${price}
          </Badge>
          <div className="flex items-center gap-1 px-2 bg-teal-400 rounded-sm text-white">
            <FaStar></FaStar> {ratings}
          </div>
        </div>
      </div>
      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col md:flex-row h-96 md:h-80 px-8">
        {user ? (
          <form
            onSubmit={addReview}
            className="flex flex-col gap-2 w-full md:w-1/2"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username3" color="green" value="Your name" />
              </div>
              <TextInput
                id="username"
                readOnly
                placeholder="Bonnie Green"
                required={true}
                color="green"
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Rating" />
              </div>
              <Select id="countries" required={true} name='rating'>
                <option value='0'>select an option</option>
                <option value='5'>5</option>
                <option value='4'>4</option>
                <option value='3'>3</option>
                <option value='2'>2</option>
                <option value='1'>1</option>
                
              </Select>
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={2}
                name="text"
              />
            </div>
            <Button type="submit">Add Review</Button>
          </form>
        ) : (
          <div className="w-full md:w-1/2 grid place-items-center">
            <Link to="/login">
              <span className="text-lg font-bold text-cyan-500">
                Please login to add a Review
              </span>
              <Button size="lg" gradientDuoTone="cyanToBlue">
                Login
              </Button>
            </Link>
          </div>
        )}

        <div className="w-full md:w-1/2 overflow-y-auto">
          {reviews.map((review,idx) => (
            <ReviewCard key={idx} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
