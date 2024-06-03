import React from 'react'
import reactdom from 'react-dom/client'
import "./style.css"
import Navbar from './components/navbar'
import Categories from './components/categories'
import Saleimage from './components/saleimage'
import Recommended from './components/recommended'
import Topics from './components/topics'
import Mostpopular from './components/mostpopular'
import Footer from './components/footer'
const root = reactdom.createRoot(document.getElementById("root"))
root.render(
  <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Saleimage></Saleimage>
    <Recommended></Recommended>
    <Topics></Topics>
    <Mostpopular></Mostpopular>
    <Footer></Footer>
  </div>
)
