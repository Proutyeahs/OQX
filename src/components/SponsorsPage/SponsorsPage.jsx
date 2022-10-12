import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './SponsorsPage.css';


//This Page displays potential sponsors as well as their tiers (organized by size)

function SponsorsPage() {
    const sponsors = useSelector((store) => store.sponsor);
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Sponsors');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_SPONSOR',
        })
    }, [])

    //console.log(sponsors)

    const tier = () => {
        for (let sponsor of sponsors)
        console.log(sponsor)
    }

    tier()

    return (
        <>
            <div>
                <h2>{heading}</h2>
            </div>

            <div >
                <a className="text-gray-300" href="https://atelierlks.com/stunning-examples-fake-logos/">source for images used</a>
            </div>

            <div class="bg-cyan-300">
                <br></br>

                {/* <img src="../generic-images/companylogo.png" class="object-scale-down h-48 ; rounded-full"/> */}

                <p class="text-2xl">Crown Sponsor</p>

                tier 1<br></br>
                {/* <img src="../generic-images/companylogo.png" class="rounded-full" /> */}

            </div>
            <div class="bg-cyan-400">
                tier 2<br></br>
                {/* <img src="../generic-images/99gen_circlein.png" class="object-scale-down h-32 ; rounded-full" />
                <img src="../generic-images/99gen_gear.png" class="object-scale-down h-32 ; rounded-full" />
                <img src="../generic-images/99gen_sphere.png" class="object-scale-down h-32 ; rounded-full" /> */}
            </div>

            <div class="bg-cyan-500">
                tier 3<br></br>
                {/* <img src="../generic-images/99gen_swooshyman.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/99gen_tree.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/99gen_circlein.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/99gen_gear.png" class="object-scale-down h-24 ; rounded-full" />
                <br></br>
                <img src="../generic-images/99gen_sphere.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/99gen_swooshyman.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/99gen_tree.png" class="object-scale-down h-24 ; rounded-full" />
                <img src="../generic-images/99gen_circlein.png" class="object-scale-down h-24 ; rounded-full" /> */}
            </div>
        </>
    );
}

export default SponsorsPage;