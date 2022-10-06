import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ResourcesPage() {

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Resources');

    return (
        <>
            <div>
                <h2>{heading}</h2>
            </div>

            <div >
            </div>

            <div >
            <br></br>
                tier1
                <br></br>
             
              
            </div>
            <div >
                tier 2<br></br>
  
            </div>

            <div>
                tier 3<br></br>

            </div>



        </>
    );
}

export default ResourcesPage;