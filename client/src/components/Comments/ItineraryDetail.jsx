import React from 'react';
import PropTypes from 'prop-types';
import OutputComments from '../Comments/OutputComments';

const ItineraryDetail = props => {
    return (
        <div className="col-md-8 align-items-center bg-dark">
            <OutputComments/>
        </div>
    );
};

ItineraryDetail.propTypes = {
    
};

export default ItineraryDetail;