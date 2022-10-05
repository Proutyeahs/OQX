import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './SponsorsPage.css';

//This Page displays potential sponsors as well as their tiers (organized by size)
function SponsorsPage() {

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Sponsors');

    return (
        <>
            <div>
                <h2>{heading}</h2>
            </div>

            <div >
                <a className="text-gray-300" href="https://atelierlks.com/stunning-examples-fake-logos/">source for images used</a>
            </div>

            <div class="bg-cyan-300">
                tier 1<br></br>
                <img src="../generic-images/companylogo.png" class="rounded-full"/>
            </div>
            <div class="bg-cyan-400">
                tier 2<br></br>
                <img src="../generic-images/companylogo1.png" class="object-scale-down h-48 ; rounded-full" />
                <img src="../generic-images/companylogo2.png" class="object-scale-down h-48 ; rounded-full" />
                <img src="../generic-images/companylogo3.jpg" class="object-scale-down h-48 ; rounded-full" />
            </div>

            <div class="bg-cyan-500">
                tier 3<br></br>
                <img src="../generic-images/companylogo4.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/companylogo5.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/companylogo6.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/companylogo7.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/companylogo8.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/companylogo9.png" class="object-scale-down h-24 ; rounded-full" />
            </div>



        </>
    );
}

export default SponsorsPage;