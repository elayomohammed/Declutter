import React from "react";
import Header from "./parts/Header.tsx";
import FeaturedSales from "./FeaturedSales.tsx";
import Footer from "./parts/Footer.tsx";
import'../styles/home.css';

// Hard coded data for featured sales, this will be replaced with data from databse.
// A class will be created to cater for the instantiation of featured sales. 
const featuredSales:any = {
    1: {
        name:'Apple iPhone 14 pro 256GB Unlocked AT&T T-Mobile Verizon',
        type: 'Used',
        img: require('../components-dependency/featuredIMG.jpg'),
        promoStatus: true,
        price: 385.32
    }
};

const Home:React.FC = () => {
    const HomeComponent:React.FC = () =>{
        return(
            <>
            <FeaturedSales name={featuredSales[1].name} type={featuredSales[1].type} img={featuredSales[1].img} promoStatus={featuredSales[1].promoStatus} price={featuredSales[1].price} />
            </>
        )
    }
    return(
        <section id="homepage">
            <Header />
            <HomeComponent />
            <Footer />
        </section>
    );
};
export default Home;
