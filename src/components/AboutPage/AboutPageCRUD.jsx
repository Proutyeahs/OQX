import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
const AboutPageCRUD = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ABOUT_PAGE',
        })
    }, [])
    

  return (
   <>
        <div>
          <p>Test</p>
        </div>
   </>
  )
}

export default AboutPageCRUD;
