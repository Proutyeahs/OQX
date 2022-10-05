import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import bgImg from '../MedicalScientific/card-top.jpeg';

const MedicalScientific = () => {

    const dispatch = useDispatch();

    // Created a variable that contains CSS to then style the timeline itself.
    const divStyle = {
        left: '5%',
        // right: '50%',
        border: '3px solid blue',
        borderRadius: '1%'
    };
    //formatDate is used to make our timestamps pretty
    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    const events = useSelector((store) => store.event)

    useEffect(() => {
        dispatch({
            type: 'GET_EVENT',
            payload: 2
        })
    }, [])

    return (
        <>
            <section>
                {/* This first chunk of DIVs contains the header for the page.*/}
                <div className="bg-white text-black">
                    <div className="container mx-auto flex flex-col items-start md:flex-row md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 md:mt-12 px-8">
                            <p className="text-gray-900 uppercase tracking-loose">Medical Scientific</p>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
                            <p className="text-sm md:text-base text-gray-900 mb-4">
                                Something about Medical Scientific stuff.
                            </p>
                        </div>
                        {/* This second chunk of DIVs contains the card for each individual item from the DB for the respective timeline*/}
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className="border-2-2 border-blue-555 absolute h-full border" style={divStyle}></div>
                                <div className=''>
                                    {events.map(event => (
                                        <>
                                            <p className="text-gray-700 text-base">{formatDate(event.date)}</p>
                                            {event.image != '' &&
                                                <img className="rounded-t-lg" src={event.image} />}
                                            <div className="mb-10 px-6 py-4 text-left max-w-sm rounded-b-lg overflow-hidden shadow-2xl" key={event.id}>
                                                <p className="font-bold text-xl mb-2">{event.title}</p>
                                                <p className="text-gray-700 text-base">Info:{event.info}</p>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default MedicalScientific;