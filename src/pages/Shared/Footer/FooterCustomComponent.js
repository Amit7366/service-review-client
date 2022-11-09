import { Footer } from "flowbite-react";
import React from "react";

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
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Plabon Fitness Trainer" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterCustomComponent;
