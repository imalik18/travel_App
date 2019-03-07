import React from 'react';
import './ExplorePage.css';
import Navbar from '../Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MapWithASearchBox from "../MyMap/MapSearch"

class ExplorePage extends React.Component {
    state = {
        places: "",
        results: []
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, function () {
            console.log(this.state)
        })
    }

    handleSubmit = () => {
        console.log(this.state.places)
        // const key= 'AIzaSyB2Juo1rmvWjd1Yp1Qb016LglopIokJhwI';
        // const query = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + this.state.places + '&key=' + key;

        // axios.get(query).then(result =>{
        //     console.log(result);

        // })

        // var service = new google.maps.places.PlacesService(document.getElementById('map'));
        // service.getDetails({
        //     placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
        // }, function (place, status) {
        //     console.log('Place details:', place);
        // });

    }
    handleSave = (results) => {
        console.log(results, "This should be our place info");
    
    }


    render() {
        return (
            <div>
                <Navbar />
                <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
                    <div className="imgdiv">
                        <img src="https://www.childrensmuseum.org/sites/default/files/ExhibitsIconsPlaces_Carousel_Large_003.jpg" />
                        <p className="legend">Children's Museum Carousel</p>
                    </div>
                    <div className="imgdiv">
                        <img src="https://www.romantic-germany.info/fileadmin/_processed_/csm_Rheinsteig_Wanderpaar_auf_der_Filsener_Ley_1689_01fd425d15.jpg" />
                        <p className="legend">Hike</p>
                    </div>
                    <div className="imgdiv">
                        <img src="http://www.vsveicolispeciali.com/wp-content/uploads/2017/09/dati-numeri-settore-street-food.jpg" />
                        <p className="legend">Street Food Market</p>
                    </div>
                    <div className="imgdiv">
                        <img src="http://res.cloudinary.com/culturemap-com/image/upload/ar_1:1,c_fill,g_faces:center,w_1200/v1536271613/photos/104122_original.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>

                <div className="background">
                    <input name="places" onChange={this.handleChange} placeholder="Enter Place" />
                    <button onClick={this.handleSubmit}>submit</button>
                </div>

                {/* <MyMap
                    isMarkerShown={true}
                    onMarkerClick={this.handleMarkerClick}
                /> */}

                <MapWithASearchBox />

                {/* <MyMapComponent isMarkerShown />// Map with a Marker
                <MyMapComponent isMarkerShown={false} />// Just only Map */}
            </div>
        )
    }
}

export default ExplorePage;