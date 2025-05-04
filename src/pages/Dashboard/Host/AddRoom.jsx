import React, { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import toast from "react-hot-toast";

const AddRoom = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  //Date range handler
  const handleDates = (item) => {
    setDates(item.selection);
  };

  //   Form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];

    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    try {
      const image_url = await imageUpload(image);
      const roomData = {
        location,
        category,
        title,
        to,
        from,
        price,
        guests,
        bathrooms,
        bedrooms,
        host,
        description,
        image: image_url,
      };
      console.table(roomData);

      //   Post request to server
      await mutateAsync(roomData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

    //   handle image change
    const handleImage = image => {
      setImagePreview(URL.createObjectURL(image))
      setImageText(image.name)
    }
  
  return (
    <div>
      {/*add room form  */}
      <div>
        <h1 className="text-center p-5 text-4xl font-semibold">
          Add your Room
        </h1>
      </div>
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
      />
    </div>
  );
};

export default AddRoom;
