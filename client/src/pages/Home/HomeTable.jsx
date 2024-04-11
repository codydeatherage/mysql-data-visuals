import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeTable = ({ products }) => {
  const [searchText, setSearchText] = useState();
  const navigate = useNavigate();
  const headers = ["Id", "Name", "Price($)"];

  const handleRowClick = (row) => {
    navigate(`/products/${row.productId}`);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = useMemo(() => {
    if (searchText) {
      return products.filter((product) =>
        product.productName.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return products;
  }, [searchText]);

  return (
    <div style={{ margin: "auto", width: "500px", height: "100%" }}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        style={{ marginBottom: "15px" }}
      />
      <table
        style={{
          width: "100%",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr onClick={() => handleRowClick(product)} key={index}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{`$${product.productPrice}.00`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
