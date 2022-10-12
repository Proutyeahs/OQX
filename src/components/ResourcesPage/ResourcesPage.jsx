import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './ResourcesPage.css';

//This Page displays resources sponsors as well as their categories

function ResourcesPage() {
    const resources = useSelector((store) => store.resource)
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Resources');
    const dispatch = useDispatch();
    const history = useHistory();

<<<<<<< HEAD
    //on load, fetch resources
=======
>>>>>>> 0988e059584ed938fac9ac46aef5c91e8cd92df2
    useEffect(() => {
        dispatch({
            type: 'FETCH_RESOURCE',
        })
    }, [])

    //console.log(resources);

    return (
        <>
            <div>
                <h2>{heading}</h2>
            </div>
            <div className="resources">
                {resources.map(resource =>
                    <ul key={resource.id}>
                        <li>{resource.name}</li>
                        <li>{resource.address}</li>
                        <li>{resource.phoneNumber}</li>
                    </ul>)}
            </div>
        </>
    );
}

export default ResourcesPage;