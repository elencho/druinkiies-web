import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={"src/assets/Drinkiies-Logo_Logo_flat.png"} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{t("Company")}</Nav.Link>
            <Nav.Link href="#features">{t("Skills")}</Nav.Link>
            <Nav.Link href="#pricing">{t("Contact")}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
