import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const UpdateReview = () => {
  useTitle('Update Review - Plabon Fitness Trainer')
    const { user } = useContext(AuthContext);
    const review = useLoaderData();

    console.log(review);

    const updateReview = (event) =>{
        event.preventDefault();
        const form = event.target;

        const rating = form.rating.value;
        const text = form.text.value;

        const finalRating = {
            ratings:rating,
            text:text  
        }
        fetch(`http://localhost:5000/review/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(finalRating)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated !')
                }
            })
    }
    return (
        <div className="w-full md:w-1/2 md:mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-500">Update Review</h2>
        <form
            onSubmit={updateReview}
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
                defaultValue={review.text}
              />
            </div>
            <Button type="submit">Update Review</Button>
          </form>
      </div>
    );
};

export default UpdateReview;