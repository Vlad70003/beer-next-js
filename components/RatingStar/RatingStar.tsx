import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import ReactStars from "react-stars";

export const RatingStar = () => {

  const ratingChanged = (newRating:number) => {

  }
  return <ReactStars count={5} size={60} color2={"#F0D12B"} onChange={ratingChanged}  />;
};
