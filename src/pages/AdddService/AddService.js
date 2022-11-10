import React, { useContext } from 'react';
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
const AddService = () => {
    const {user} = useContext(AuthContext);
    const addService = (event) =>{
      event.preventDefault();

      const form = event.target;


      const title = form.title.value;
      const details = form.details.value;
      const imageUrl = form.imageUrl.value;
      const price = form.price.value;
      const ratings = form.ratings.value;
      const uid = user.uid;


      const service = {
        image : imageUrl,
        title : title,
        details : details,
        price : price,
        ratings: ratings,
        userId : uid,
      }

      fetch('http://localhost:5000/service', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(service)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Order placed successfully')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));



    }
    return (
        <div className="w-full md:w-1/2 md:mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-500">Add a Service</h2>
        <form onSubmit={addService} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Title" />
            </div>
            <TextInput
              type="text"
              name='title'
              placeholder="Title"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Details" />
            </div>
            <Textarea
              name='details'
              type="text"
              placeholder="Details"
              rows={4}
              required={true}

            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Image URL" />
            </div>
            <TextInput
              name='imageUrl'
              type="text"
              placeholder="Image URL"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Price" />
            </div>
            <TextInput
              type="text"
              name='price'
              placeholder="$"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Ratings" />
            </div>
            <TextInput
              type="number"
              name='ratings'
              placeholder=""
              required={true}
            />
          </div>



          <Button type="submit" gradientDuoTone="purpleToBlue">Add Service</Button>
        </form>
      </div>
    );
};

export default AddService;