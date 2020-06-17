import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { motion } from "framer-motion";
import { images } from "./images";

import './style.css'

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.2, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.2,
    opacity: 0,
    transition: { duration: 0.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: { scale: 1.1 }
};

const Thumbnail = ({ id, i }) => (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      className="frame"
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      <Link to={`/page-${i}`}>
        <motion.img
          src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/${id}.jpg?format=1500w`}
          alt="The Barbican"
          variants={imageVariants}
          transition={transition}
        />
      </Link>
    </motion.div>
  </motion.div>
);

function IndexPage()
{

  return (
    <Layout>
      <SEO title="Home" />

      <div className="container">
        <div className="content">
          <h1>Barbican</h1>
          <div className="gallery">
            <motion.div
              className="thumbnails"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
              {images.map((id, i) => (
                <Thumbnail key={id} id={id} i={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
