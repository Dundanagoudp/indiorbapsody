import React from "react";
import { ClipLoader, ScaleLoader } from "react-spinners";
import { LoaderContainer } from "../loader/ApiLoders.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <ClipLoader  color="#4055A0" size={40} />
    </LoaderContainer>
  );
};

export default Loader;