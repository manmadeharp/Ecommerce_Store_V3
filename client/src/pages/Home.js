import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {
  return (
    <>
	  <h1 className="text-center p-8 mt-8 mb-8 display-8 jumbotron">Welcome to my store</h1>
	  <h5 className="text-center p-5  mt-8 mb-8 display-8 jumbotron">Unfortunately I have lost the database to this project after not developing this project for 3 months. I will be making a new one with mysql (because mongodb is trash) instead in the near future</h5>
	  <h2> you can still check out the remnants of this project as everything is here but the actual data (this means alot of the features are not included but the site was fully functional and you will be able to see most of it's features)</h2>
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList />
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h4>
      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
