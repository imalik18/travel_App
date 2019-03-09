import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Slides(props) {
    console.log(props);
    return (
        
        <div>
            <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
                {props.imgArray.map(item => {
                    return (
                        <div className="imgdiv">
                            <img src={item.img} />
                            <p className="legend">{item.info}</p>
                        </div>
                    )
                

                })}
                {/* <div className="imgdiv">
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
                </div> */}
            </Carousel>
        </div>
    )
}



export default Slides;