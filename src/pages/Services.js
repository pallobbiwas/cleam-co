import React, { useEffect, useState } from "react";
import fetecher from "../Api/axos.init.config";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    //iffe funciotn

    (async () => {
      const data = await fetecher.get("/service");
      setServices(data.data);
    })();
  }, []);

  console.log(services);

  return (
    <div>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
    </div>
  );
};

export default Services;
