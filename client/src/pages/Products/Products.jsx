import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsApi } from "../../../api/products";
import CircularProgress from "@mui/material/CircularProgress";

const Products = () => {
  const [productInfo, setProductInfo] = useState();
  const { productId } = useParams(); //hook from react-router-dom lets us easily read URL Params

  useEffect(() => {
    //1.) create an arrow function named fetchProduct
    //    -should use getProductById function from productsApi
    //2.) call fetchProduct if our 'productInfo' state is empty
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
      {productInfo ? (
        <div>
          <h2>{productInfo.productName}</h2>
          <h4>{`$${productInfo.productPrice}.00`}</h4>
        </div>
      ) : (
        <div style={{ margin: "5rem auto", height: "100%" }}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Products;
