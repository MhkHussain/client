import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Cards/Cards";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Footer from "../components/Footer/Footer";
import { Flex } from "@chakra-ui/react";

const Blogs = () => {
  const data = [
    {
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      authorImage: "https://avatars0.githubusercontent.com/u/1164541?v=4",
      authorName: "John Doe",
      publishDate: "May 08, 2021",
      duration: "5 min read",
      blogImage:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Title 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      authorImage: "https://avatars0.githubusercontent.com/u/1164541?v=4",
      authorName: "John Doe",
      publishDate: "May 08, 2021",
      duration: "5 min read",
      blogImage:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Title 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      authorImage: "https://avatars0.githubusercontent.com/u/1164541?v=4",
      authorName: "John Doe",
      publishDate: "May 08, 2021",
      duration: "5 min read",
      blogImage:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]; 
  return (
    <>
      <Navbar />
      <SectionTitle title="Blogs" />
      <Flex
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem 0rem",
        }}
      >
        {data.map((element, index) => {
          return (
            <Card
              title={element.title}
              desc={element.desc}
              authorImage={element.authorImage}
              authorName={element.authorName}
              publishDate={element.publishDate}
              duration={element.duration}
              blogImage={element.blogImage}
              key={index}
            />
          );
        })}

        
      </Flex>

      <Footer />
    </>
  );
};

export default Blogs;
