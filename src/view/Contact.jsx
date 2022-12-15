import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Contact</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          voluptatum, ea eius veritatis excepturi maiores eos fuga deserunt,
          nemo aperiam, exercitationem obcaecati! Quos suscipit neque ab. Eum
          sapiente doloremque quibusdam.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
