import React from 'react';
import Carousel from 'nuka-carousel';


const ItinerariesCarousel = props => {
    return (
        <div>
            <Carousel>
                <div className="ml-3 row align-items-center">     
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                </div>
                <div className="ml-3 row align-items-center">     
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                    <div className="rounded m-1"style={{backgroundColor:'black', height:'20vh',width:'18vw'}}></div>
                </div>
                
            </Carousel>
        </div>
    );
};

ItinerariesCarousel.propTypes = {
    
};

export default ItinerariesCarousel;