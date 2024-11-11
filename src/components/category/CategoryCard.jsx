import React from "react";

const CategoryCard = ({ props }) => {
  //   console.log("props", props);

  return (
    <div
      style={{
        width: "150px",
        height: "180px",
        border: "1px solid #d3d3d3",
        backgroundColor: "#aaaaaa",
        textAlign: "center",
      }}
    >
      <div style={{ backgroundColor: "#f5f5f5", padding: "0.2rem" }}>
        <img
          src={props.imageURL}
          style={{
            height: "120px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <p
        style={{
          lineHeight: "1px",
          fontSize: "14px",
          textTransform: "capitalize",
          marginTop: "1rem",
        }}
      >
        {props.keyword}
      </p>
      <h4
        style={{
          lineHeight: "1px",
          textTransform: "uppercase",
          marginTop: "1.3rem",
        }}
      >
        Shop Now
      </h4>
    </div>
  );
};

export default CategoryCard;
