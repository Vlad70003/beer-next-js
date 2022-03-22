import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";

export const RatingStar = () => {

  const ratingChanged = (newRating:number) => {
    console.log(newRating)
  }
  return <ReactStars count={5} size={60} color2={"#F0D12B"} onChange={ratingChanged}  />;
};
