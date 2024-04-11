import React, { useState, useEffect } from "react";
import { productsApi } from "../../../api/products";
import CircularProgress from "@mui/material/CircularProgress";
import HomeTable from "./HomeTable";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await productsApi.getProducts();
      //setTimeout just so we can see spinner
      setTimeout(() => setProducts(results), 1000);
    };
    if (!products) {
      fetchProducts();
    }
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
