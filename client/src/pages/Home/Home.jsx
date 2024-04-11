import React, { useState, useEffect } from "react";
import { productsApi } from "../../../api/products";
import CircularProgress from "@mui/material/CircularProgress";
import HomeTable from "./HomeTable";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    //1.) create an arrow function named fetchProducts
    //    -should use getProducts function from productsApi
    //2.) call fetchProducts if our 'products' state is empty
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        textAlign: "left",
        paddingTop: "5rem",
      }}
    >
      {products ? (
        <HomeTable products={products} />
      ) : (
        <div style={{ margin: "5rem auto", height: "100%" }}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Home;
