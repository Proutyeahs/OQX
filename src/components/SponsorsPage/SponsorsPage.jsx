import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import './SponsorsPage.css';

//This Page displays potential sponsors as well as their tiers

function SponsorsPage() {
    const sponsors = useSelector((store) => store.sponsor);
    const [heading, setHeading] = useState('Sponsors');
    const dispatch = useDispatch();

    //on load, fetch sponsors
    useEffect(() => {
        dispatch({
            type: 'FETCH_SPONSOR',
        })
    }, [])

    // these are our categories for sponsorship tiers
    let gold = []
    let silver = []
    let bronze = []
    // this function sorts all of the sponsors into their categories to be displayed
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
        } return console.log(gold, silver, bronze)
    }
    //run the sorting function
    sort()

    return (
        <>
            <div>
                <h2>{heading}</h2>
            </div>
            <div >
                <a className="text-gray-300" href="https://atelierlks.com/stunning-examples-fake-logos/">source for images used</a>
            </div>
            <div>
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
            <div>
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
            <div>
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
        </>
    );
}

export default SponsorsPage;