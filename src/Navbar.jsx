import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#3b82f6" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}
