import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ResourcesPage.css';


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

            <div class="law">
            <p> Lawful Lawfirms</p>
            <p>www.lawfullaw.firms</p>
            <p> 123 Business Street, Minneapolis, MN</p>
            <p>(612) 123-4567</p>
            </div>

            <div class="health">
            <p>Healthy Happenings</p>
            <p>www.healthyhappen.ings</p>
            <p> 456 Wellness Ave, St.Paul , MN</p>
            <p>(612) 345-6789</p>
            </div>

            <div class="culture">
            <p>The Culture Business</p>
            <p>www.business.culture</p>
            <p>(612) 678-9123</p>
            </div>

        </>
    );
}

export default ResourcesPage;