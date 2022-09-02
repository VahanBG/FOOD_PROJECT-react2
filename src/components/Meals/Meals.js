import React, { Fragment } from "react";
import MealsSummery from "./MealsSummary";
import AvailbleMeals from "./AvailbleMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummery />
      <AvailbleMeals />
    </Fragment>
  );
};

export default Meals;
