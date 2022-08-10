import React from "react"
import logo from "./logo.svg"
import "./App.css"
function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={logo} alt="" />
        <ul>
        <li>Prix</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
      </nav>

    </header>
  )

}

function Body() {
  return (
    <main>
      <h1>React en marche...</h1>

      <ul>
        <li>Liste à puce</li>
        <li>Liste à puce</li>
        <li>Liste à puce</li>
      </ul>
    </main>

  )
}
function Footer() {
  return (
    <footer className="footer" >
      <small className="copy" >
        (c) copyrigth All reserve gda@ 2022
      </small>
    </footer>
  )

}

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default App