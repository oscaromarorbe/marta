import React from 'react';
import Carousel from 'nuka-carousel';
import imageButton from './Cities/imageButton';

const carouselIt = props => {
    const mapStateToProps = state=>{
        console.log(state.cities.items);
        return {
          items: state.cities.items
        };
    }
    
    
    return (
        <div>
            <Carousel>
                <div>
                    <imageButton/>
                    <imageButton/>
                    <imageButton/>
                    <imageButton/>
                </div>

            </Carousel>
        </div>
    );
};

carouselIt.propTypes = {
    
};

export default carouselIt;