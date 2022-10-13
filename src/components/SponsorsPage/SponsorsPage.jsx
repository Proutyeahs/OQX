import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './SponsorsPage.css';

//This Page displays potential sponsors as well as their tiers

function SponsorsPage() {
    const sponsors = useSelector((store) => store.sponsor);
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Sponsors');
    const dispatch = useDispatch();
    const history = useHistory();

    //on load, fetch sponsors
    useEffect(() => {
        dispatch({
            type: 'FETCH_SPONSOR',
        })
    }, [])


    let gold = []
    let silver = []
    let bronze = []
    const sort = () => {
        for (let sponsor of sponsors) {
            console.log(sponsor)
        
        if (sponsor.levelOfDonation === 1) {
            gold.push(sponsor);
        }
        if (sponsor.levelOfDonation === 2) {
            silver.push(sponsor);
        }
        if (sponsor.levelOfDonation === 3) {
            bronze.push(sponsor);
        } 
    } return console.log (gold, silver, bronze)
}

sort()


//console.log(sponsors)
//TODO: loop and organize sponsors by tier
const tier1 = () => {
    for (let sponsor of sponsors) {
        console.log(sponsor)
        if (sponsor.levelOfDonation === 1) {
            return <ul key={sponsor.id}>
                <li>{sponsor.company}</li>
                <img src={sponsor.image} />
            </ul>
        }
    }
} //end tier1

const tier2 = () => {
    for (let sponsor of sponsors) {
        console.log(sponsor)
        if (sponsor.levelOfDonation === 2) {
            return <ul key={sponsor.id}>
                <li>{sponsor.company}</li>
                <img src={sponsor.image} />
            </ul>
        }
    }
} //end tier2

const tier3 = () => {
    for (let sponsor of sponsors) {
        console.log(sponsor)
        if (sponsor.levelOfDonation === 3) {
            return <ul key={sponsor.id}>
                <li>{sponsor.company}</li>
                <img src={sponsor.image} />
            </ul>
        }
    }
} //end tier3





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
            <div>
                {gold.map(sponsor =>
                    <ul key={sponsor.id}>
                        <li>{sponsor.company}</li>
                        <img src={sponsor.image} />
                        <li>{sponsor.levelOfDonation}</li>
                    </ul>)}
            </div>
        </div>

        <div class="bg-cyan-400">
            tier 2<br></br>
            <div>
                {silver.map(sponsor =>
                    <ul key={sponsor.id}>
                        <li>{sponsor.company}</li>
                        <img src={sponsor.image} />
                        <li>{sponsor.levelOfDonation}</li>
                    </ul>)}
            </div>
        </div>

        <div class="bg-cyan-500">
            tier 3<br></br>
            <div>
                {bronze.map(sponsor =>
                    <ul key={sponsor.id}>
                        <li>{sponsor.company}</li>
                        <img src={sponsor.image} />
                        <li>{sponsor.levelOfDonation}</li>
                    </ul>)}
            </div>
        </div>



        {/* <div className="sponsor">
                {sponsors.map(sponsor =>
                    <ul key={sponsor.id}>
                        <li>{sponsor.company}</li>
                        <img src={sponsor.image} />
                        <li>{sponsor.levelOfDonation}</li>
                    </ul>)}
            </div> */}
    </>
);
}

export default SponsorsPage;