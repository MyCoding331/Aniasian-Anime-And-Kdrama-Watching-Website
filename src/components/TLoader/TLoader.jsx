import React from "react";
import { TailSpin } from "react-loader-spinner";
const TLoader = ({ results }) => {
  return (
    <>
      
      
        <TailSpin
          height="50"
          width="50"
          color="rgb(40, 172, 40)"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
          }}
          wrapperClass=""
          visible={false}
        />
     
    </>
  );
};

export default TLoader;
