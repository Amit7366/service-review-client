import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const FooterCustomComponent = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#"
            src="https://i.ibb.co/rQ3XWBh/logo.png"
            alt="Flowbite Logo"
            name="Plabon Fitness Trainer"
          />
          <Footer.LinkGroup>
            <Link to="/" className="ml-2">Home</Link>
            <Link to="/services" className="ml-2">Services</Link>
            <Link to="/blogs" className="ml-2">Blog</Link>
            
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Plabon Fitness Trainer" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterCustomComponent;
