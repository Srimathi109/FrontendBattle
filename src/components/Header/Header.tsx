import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar">

        <a href="/" className="logo">
          ARMORY AI
        </a>

        <nav className={open ? "nav active" : "nav"}>

          <a href="#features">Features</a>

          <a href="#pricing">Pricing</a>

          <a href="#testimonials">Testimonials</a>

          <a href="#faq">FAQ</a>

        </nav>

        <div className="header-actions">

          <button className="demo-btn">

            Book Demo

          </button>

          <button

            className="menu-btn"

            onClick={() => setOpen(!open)}

          >

            ☰

          </button>

        </div>

      </div>
    </header>
  );
}