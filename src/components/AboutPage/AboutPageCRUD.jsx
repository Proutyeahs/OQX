import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AboutPageCRUD = () => {

  const aboutReducer = useSelector((store) => store.aboutReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_ABOUT_PAGE',
    })
  }, [])


  return (
    <>
      <div>
        {aboutReducer.map(about => (
          <>
            <div key={about.id}>

              <p className='text-2xl font-semibold mt-4' key={about.id}>About Us:</p>
              <p>{about.aboutUs}</p>

              <p className='text-2xl font-semibold mt-4'>Who are we?</p>
              <p>{about.whoAreWe}</p>

              <p className='text-2xl font-semibold mt-4'>Dr.Leo Bio:</p>
              <p>{about.DrLeoBio}</p>

              <p className='text-2xl font-semibold mt-4'>Dr.Leo Photo:</p>
              <p>{about.DrLeoPhoto}</p>

              <p className='text-2xl font-semibold mt-4'>Dr.Rider Bio:</p>
              <p>{about.DrRiderBio}</p>
              
              <p className='text-2xl font-semibold mt-4'>Dr.Rider Photo:</p>
              <p>{about.DrRiderPhoto}</p>

              <p className='text-2xl font-semibold mt-4'>What is Our Queer HxStory</p>
              <p>{about.WhatIsOQX}</p>

              <p className='text-2xl font-semibold mt-4'>Our Mission:</p>
              <p>{about.mission}</p>

              <p className='text-2xl font-semibold'>Where does your information go to?</p>
              <p>{about.whereInfo}</p>

              <p className='text-2xl font-semibold'>Where does your money go to?</p>
              <p>{about.whereMoney}</p>

              <p className='text-2xl font-semibold'>Is OQX a non-profit?</p>
              <p>{about.nonprofit}</p>

            </div>
          </>
        ))}
      </div>

    </>
  )
}

export default AboutPageCRUD;
