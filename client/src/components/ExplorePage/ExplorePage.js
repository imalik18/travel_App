import React from "react";
import "./ExplorePage.css";
import Navbar from "../Navbar/Navbar";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import MapWithASearchBox from "../MyMap/MapSearch";
import Slides from "../Carousel/Carousel";

class ExplorePage extends React.Component {
	state = {
		places: "",
		results: [],
		carousel: [
			{
				img:"http://4.bp.blogspot.com/-xu5NL5mxyfk/UfeasyxUISI/AAAAAAAAcS8/y1un3J0H7z8/s1600/DSC_0343.JPG",
				info: "New York High Line"
			},
			{
				img: "http://farm3.static.flickr.com/2726/5711624414_50b4095abc.jpg",
				info: "Blowing Rock Nature Preserve, Florida"
			},
			{
				img:
					"https://i.pinimg.com/originals/07/c1/4c/07c14ce46798e16f674997eb6084f948.jpg",
				info: "The Board Room, Washington DC"
			},
			{
				img:
					"https://www.hephzibahhome.org/wp-content/uploads/2014/11/Heph14_BigDoor_web.jpg",
				info: "Big Monster Toys, Chicago"
			},
			{
				img:
					"https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Carlsbad-Caverns-National-Park.jpg",
				info: "Carlsbad Caverns National Park"
			},
			{
				img:
					"https://tipsforfamilytrips.com/wp-content/uploads/2016/09/coral-pink-sand-dunes-5-800x533.jpg",
				info: "Coral Pink Sand Dunes, Utah"
			},
			{
				img:
					"https://pbs.twimg.com/profile_images/483425500/world_wide_tacos_400x400.jpg",
				info: "Worldwide Tacos, Los Angeles"
			},
			{
				img:
					"https://www.bedouk.com/mediatheque/annonceur/9/6/1/0000761169_920x572.jpg",
				info: "Cochon Restaurant, New Orleans"
			},
			{
				img:
					"https://www.myutahparks.com/.image/t_share/MTQ4MzM1NjgyMjUyNzExNjY4/arches-delicate-arch-sky_adobe_680.jpg",
				info: "Arches National Park, Utah"
			}
		]
	};
	// handleChange = event => {
	// 	this.setState(
	// 		{
	// 			[event.target.name]: event.target.value
	// 		},
	// 		function() {
	// 			console.log(this.state);
	// 		}
	// 	);
	// };

	// handleSubmit = () => {
	// 	console.log(this.state.places);
	// 	// const key= 'AIzaSyB2Juo1rmvWjd1Yp1Qb016LglopIokJhwI';
	// 	// const query = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + this.state.places + '&key=' + key;

	// 	// axios.get(query).then(result =>{
	// 	//     console.log(result);

	// 	// })

	// 	// var service = new google.maps.places.PlacesService(document.getElementById('map'));
	// 	// service.getDetails({
	// 	//     placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
	// 	// }, function (place, status) {
	// 	//     console.log('Place details:', place);
	// 	// });
	// };
	// handleSave = results => {
	// 	console.log(results, "This should be our place info");
	// };

	render() {
		return (
			<div>
				<Navbar profile={false} trips={false} locale={false} />

				<Slides imgArray={this.state.carousel} />
				{/* <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
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
                </Carousel> */}

				{/* <div className="background">
					<input
						name="places"
						onChange={this.handleChange}
						placeholder="Enter Place"
					/>
					<button onClick={this.handleSubmit}>submit</button>
				</div> */}
				
				{/* <MyMap
                    isMarkerShown={true}
                    onMarkerClick={this.handleMarkerClick}
                /> */}

				<MapWithASearchBox />
				{/* <MapWithAMakredInfoWindow
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDISktmcu2sh8Wya7JNXgPs6c9GgQ5GOcA&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> */}

				{/* <MyMapComponent isMarkerShown />// Map with a Marker
                <MyMapComponent isMarkerShown={false} />// Just only Map */}
			</div>
		);
	}
}

export default ExplorePage;
