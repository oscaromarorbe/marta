import React, { useState } from 'react';
import Pencil from 'react-icons/lib/fa/pencil';
/* import Comments from './Comments'; */
import { tsAnyKeyword } from '@babel/types';
import { connect } from "react-redux";
import {reduxFetch} from '../../store/actions/reduxFetch';
import {requestComments,requestCommentsSuccess} from '../../store/actions/itineraryActions';
  
const mapSateToProps = state=>{
    return{
        comments:state.itineraries.comments
    };
};

const mapDispatchToProps = dispatch=>{
   return{
      requestComments:()=>{
          dispatch(
              reduxFetch('api/itineraries',requestComments,requestCommentsSuccess)
          )
      } 
   };
};


const outputComments = (props) => {
  
    return (
        <div>
            <div className="row p-4">
                <div className="bg-light rounded col-md-3 p-3">
                    <h5 >holaola</h5>
                    <Pencil className="float-right"/>
                </div>
                <div className="bg-light rounded col-md-3 ml-2">
                    <h5>chauchau</h5>
                    <Pencil className="float-right"/>
                </div>
                {/*  {comments.map(c=> (<span>{c.comments}</span>) 
                )}*/}
           
            </div> 
        </div>
    );
};
const reduxComments = connect(mapSateToProps,mapDispatchToProps)(outputComments)

export default reduxComments;