import React from 'react';
import { Button, Label, Textarea, TextInput } from "flowbite-react";
const AddService = () => {
    return (
        <div className="w-full md:w-1/2 md:mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-500">Add a Service</h2>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Title" />
            </div>
            <TextInput
              type="text"
              placeholder="Title"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Details" />
            </div>
            <Textarea
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
              placeholder="$"
              required={true}
            />
          </div>



          <Button type="submit" gradientDuoTone="purpleToBlue">Add Service</Button>
        </form>
      </div>
    );
};

export default AddService;