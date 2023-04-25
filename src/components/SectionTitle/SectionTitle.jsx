import React from "react";
import { Heading } from "@chakra-ui/react";

const SectionTitle = ({title}) => {
  return (
    <Heading
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: "3rem 0rem",
      }}
    >
      {title}
    </Heading>
  );
};

export default SectionTitle;