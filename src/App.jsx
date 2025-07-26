import { } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Row from "./components/Row";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
// import dummyData from "./components/dummyData";


function App() {

  return (
    //  <div className="bg-black text-white">
    //   <Navbar />
    //   <Hero movie={dummyData.trending[0]} />
    //   <Row title="Trending Now" movies={dummyData.trending} />
    //   <Row title="Top Rated" movies={dummyData.topRated} />
    //   <Row title="Action Movies" movies={dummyData.action} />
    // </div>
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}




export default App;
