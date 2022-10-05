import React from 'react';
import './AboutPage.css';
import '@fontsource/roboto';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    
    <>
    <div className='about'>
      <div>
        <h2 className='font-bold text-2xl'>About Our Queer Hxstory</h2>
        <br></br>
        {/* Change About OQX info here */}
        <p className='text-left'>
          LGBTQ literature and educational resources are often barred behind paywalls and complex language.
          <br></br>
          <br></br>
          Our Queer Hxstory creates a platform for people to access three educational timelines: political/legal, medical/scientific, and business/cultural. All at no cost and accessible for people as young as ten.
          <br></br>
          <br></br>
          Now, the LGBTQ story is available to all reading levels and all educational levels. OQX gives you clean timelines that you can click into and explore the consequential events that still impact us all today. Whether you are discovering queer history for the first time, or diving deep into the research, Our Queer Hxstory opens the doors for you. 
        </p>
        {/* End about OQX */}
        <br></br>
        {/* Donation Link */}
        <a className='text-blue-600' href="https://o
        urqueerhxtory.com">Please Consider Donating to OQX</a>
        <br></br>
        <br></br>
      </div>
        <h2 className='font-bold text-2xl'>About Us</h2>
        <br></br>
       
  {/* Begin Bio 1(Copy from this line to "End Bio 1", paste after "End Bio 2", and change info if ever adding another Bio) */}
  <div className="flex items-center justify-center">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Change photo here */}
      <img className="w-full" src="https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png"alt="Leo"/>
        <div className="px-6 py-4">
          {/* Change name or title here */}
          <div className="font-bold text-xl mb-2">Leonardo E. Candelario-Pérez, Ph.D. LP</div>
            {/* Change Bio info here */}
            <p className="text-gray-700 text-base text-left">
            Lorem ipsum dolor sit amet. Et saepe sunt qui dignissimos dolores aut ipsa praesentium ut officia voluptatem ut consequatur iusto magni repellendus sit aliquid quis. Cum Quis accusantium et animi iste et dolore labore et mollitia incidunt qui minus ullam ut rerum nemo! 
            </p>
        </div>
    </div>
  </div>
  {/* End Bio 1 */}
    <br></br>
  {/* Begin Bio 2   */}
  <div className="flex items-center justify-center">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png"alt="Nic"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Nic Rider, Ph.D.</div>
            <p className="text-gray-700 text-base text-left">
            Lorem ipsum dolor sit amet. Et saepe sunt qui dignissimos dolores aut ipsa praesentium ut officia voluptatem ut consequatur iusto magni repellendus sit aliquid quis. Cum Quis accusantium et animi iste et dolore labore et mollitia incidunt qui minus ullam ut rerum nemo! 
            </p>
        </div>
    </div>
  </div>
  {/* End Bio 2 */}
  <br></br>
  {/* Contact Link */}
  <a className='text-blue-600' href="https://ourqueerhxtory.com">Get in  contact!</a>
  </div>
  </>

  );
}

export default AboutPage;
