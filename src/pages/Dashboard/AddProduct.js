import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetecher from "../../Api/axos.init.config";

const AddProduct = () => {
  const [imgUrl, setImgUrl] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      img: imgUrl,
    };
    const res = await fetecher.post("/service", serviceData);
    console.log(res);
    reset();
  };

  const handelImagUpload = (e) => {
    const image = e.target.files[0];

    const fromData = new FormData();
    fromData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=79fd0b725c9bb9b85e875f16c38c1622",
        fromData
      )
      .then((res) => {
        setImgUrl(res.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-8">
        Please Add product
      </h1>
      <div className="flex justify-center">
        <form
          className="bg-indigo-500 w-3/4 text-center p-6 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-1/2 py-2 px-3 rounded-sm"
            placeholder="service name"
            {...register("name", { required: true })}
          />
          <br />
          <input
            className="my-3 w-1/2 py-2 px-3 rounded-sm"
            placeholder="entry email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="w-1/2 py-2 px-3 rounded-sm"
            placeholder="service price"
            type="file"
            {...register("price", { required: true })}
            onChange={handelImagUpload}
          />
          <br />
          <input
            className="my-3 w-1/2 py-2 px-3 rounded-sm"
            placeholder="service price"
            type="number"
            {...register("price", { required: true })}
          />
          <br />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
