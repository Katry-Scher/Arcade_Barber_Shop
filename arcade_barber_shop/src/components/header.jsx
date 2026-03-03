import "../styles/header.css"
import { useState } from "react"
import { TextIndent, XCircle } from "@phosphor-icons/react";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">

      <section className="logo">
        <img src="/logo.png" alt="website logo" />
      </section>

      <section className="baber_name">
            <h1> Arcade Baber shop</h1>
      </section>

      <section className="menu_button">
        <button
            type="button"
            className="iconButton"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            >
            <TextIndent className="icon" size={32} />
        </button>
      </section>
      
      <nav className={`overlay ${isMenuOpen ? "open" : ""}`}>
          <button
            type="button"
            className="overlay-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu">
        
            <XCircle size={32} />
         </button>

        <div className="overlay-content">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

      </nav>
      
    </header>
  );
}

export default Header;