import React from "react";
import Rooms from "../../components/Home/Rooms";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      {/* Categories section  */}
      <Categories />
      {/* Rooms section */}
      <Rooms />
    </div>
  );
};

export default Home
