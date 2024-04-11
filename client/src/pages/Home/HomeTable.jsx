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
      //1.) should return a filtered version of 'products', containing only entries that include
      //    some portion of the 'searchText'
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
              <th key={index}>{header}</th> //elements returned from a map() should include a unique 'key' prop
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
