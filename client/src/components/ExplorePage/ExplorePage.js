import React from 'react';
import './ExplorePage.css';
import Navbar from '../Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ExplorePage extends React.Component {
    state= {}
    
    render() {
        return (
            <div>
                <Navbar/>
                <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
                <div>
                    <img src="https://www.childrensmuseum.org/sites/default/files/ExhibitsIconsPlaces_Carousel_Large_003.jpg" />
                    <p className="legend">Children's Museum Carousel</p>
                </div>
                <div>
                    <img src="https://www.romantic-germany.info/fileadmin/_processed_/csm_Rheinsteig_Wanderpaar_auf_der_Filsener_Ley_1689_01fd425d15.jpg" />
                    <p className="legend">Hike</p>
                </div>
                <div>
                    <img src="http://www.vsveicolispeciali.com/wp-content/uploads/2017/09/dati-numeri-settore-street-food.jpg" />
                    <p className="legend">Street Food Market</p>
                </div>
                <div>
                    <img src="http://res.cloudinary.com/culturemap-com/image/upload/ar_1:1,c_fill,g_faces:center,w_1200/v1536271613/photos/104122_original.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                </Carousel>
            </div>
        )
    }
}

export default ExplorePage;