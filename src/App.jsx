import './sass/App.scss'
import Hero from './pages/Hero'
import Keune from './pages/Keune'
import InfoSoins from './pages/InfoSoins'
import Services from './pages/Services'
import LeSalon from './pages/LeSalon'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <main>
                <h1 className="visually-hidden">Bienvenue chez Le Hangar</h1>
                <Hero />
                <Keune />
                <InfoSoins />
                <Services />
                <LeSalon />
            </main>
            
            <Footer />
        </>
    )
}

export default App