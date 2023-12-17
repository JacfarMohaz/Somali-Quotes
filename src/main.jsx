import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/SomaliQoute'

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <div>
    <Header />
    <Hero />
    <Footer />
  </div>
)
