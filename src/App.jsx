import { useState } from 'react'
import './sass/App.scss'
import Hero from './pages/Hero'

function App() {
    return (
        <>
        <main>
            <h1 className="visually-hidden">Bienvenue chez Le Hangar</h1>
            <Hero />
            {/* <Keune />
            <InfoSoin />
            <Services />
            <LeSalon /> */}
        </main>
        {/* <Footer /> */}
        </>
    )
}

export default App
