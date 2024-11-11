import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const ImageGallery = ({ props }) => {
  const [selectedImage, setSelectedImage] = useState(props.images[0]);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        // backgroundColor: "red",
      }}
    >
      <Box
        sx={{
          height: "400px",
          width: "400px",
          backgroundColor: "var(--background-color)",
          margin: "auto",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "0.4rem",
        }}
      >
        <img
          src={selectedImage}
          alt={`${props.title} image`}
          loading="lazy"
          style={{
            height: "80%",
            width: "80%",
            userSelect: "none",
          }}
        />
      </Box>

      <Box sx={{ position: "relative" }}>
        {props.images.length > 4 ? (
          <Box
            onClick={scrollLeft}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-5%",
              transform: "translate(0%, -50%)",
              backgroundColor: "var(--text-color)",
              opacity: "0.5",
              color: "var(--secondary-color)",

              height: "40px",
              width: "40px",
              borderRadius: "50%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeftOutlinedIcon />
          </Box>
        ) : null}
        <Box
          ref={scrollContainerRef}
          sx={{
            height: "105px",
            width: "450px",
            //   backgroundColor: "var(--background-color)",
            margin: "auto",

            display: "flex",
            alignItems: "center",
            justifyContent: props.images.length <= 4 ? "center" : "start",
            gap: "1rem",

            // overflowX: "auto",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {props.images.map((image) => (
            <Box
              key={image}
              sx={{
                height: "90px",
                width: "90px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--background-color)",
                borderRadius: "0.4rem",
                cursor: "pointer",

                border:
                  selectedImage === image
                    ? "1px solid var(--text2-color)"
                    : "none",
              }}
            >
              <img
                onClick={(e) => {
                  setSelectedImage(e.currentTarget.src);
                }}
                src={image}
                style={{ height: "90%", width: "90%", userSelect: "none" }}
              />
            </Box>
          ))}
        </Box>

        {props.images.length > 4 ? (
          <Box
            onClick={scrollRight}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-5%",
              transform: "translate(0%, -50%)",
              backgroundColor: "var(--text-color)",
              opacity: "0.5",
              color: "var(--secondary-color)",

              height: "40px",
              width: "40px",
              borderRadius: "50%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              cursor: "pointer",
            }}
          >
            <ChevronRightOutlinedIcon />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default ImageGallery;
