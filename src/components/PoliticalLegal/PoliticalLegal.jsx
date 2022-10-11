import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField'; // MUI TEXTFIELD FOR SEARCH BAR
import SearchIcon from '@mui/icons-material/Search'; // MUI ICON FOR SEARCH BAR
// import useReadingProgress from "../PoliticalLegal/readingProgress.js"


function PoliticalLegal() {

    const events = useSelector((store) => store.event)
    // const completion = useReadingProgress();
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState()


    const handleClick = (id) => {
        console.log('Handle Click');
        console.log('ID', id)
        history.push(`/eventdetail/${id}`)
    }

    const handleSubmit = () => {
        console.log('Search input: ', search);
        dispatch({
            type: 'GET_SEARCHED_EVENTS',
            payload: { 
                payload: search,
                category: 1
            }
        })
    }

    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const point = {
        height: '25px',
        width: '25px',
        borderColor: 'blue',
        borderWidth: '2px',
        backgroundColor: 'white',
        borderRadius: '50%',
    }

    // Created a variable that contains CSS to then style the timeline itself.    
    const divStyle = {
        left: '5%',
        // right: '50%',
        border: '4px solid #1D68DE',
        borderRadius: '1%',
    };

    useEffect(() => {
        dispatch({
            type: 'GET_EVENT',
            payload: 1
        })
    }, [])

    return (
        <>

            <section>
                {/* This first chunk of DIVs contains the header for the page.*/}
                {/* SEARCH BAR */}
                <TextField variant="standard"
                    name="outlined"
                    label="Search"
                    type="outlined"
                    onChange={(event) => setSearch('%' + event.target.value + '%')}>
                </TextField>
                <SearchIcon style={{ cursor: 'pointer' }} className="mt-4" variant="standard" onClick={handleSubmit}>Submit</SearchIcon>
                {/* END SEARCH BAR */}
                <div className="bg-white text-black">
                    <div className="container mx-auto flex flex-col items-start md:flex-row md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 md:mt-12 px-8">
                            <p className="text-gray-900 uppercase tracking-loose w-30">Political Legal</p>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
                            <p className="text-sm md:text-base text-gray-900 mb-4">
                                Something about Political Legal stuff.
                            </p>
                        </div>
                        {/* This second chunk of DIVs contains the card for each individual item from the DB for the respective timeline*/}
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className=''>
                                    {events.map(event => (
                                        <>

                                            <div onClick={() => handleClick(event.id)}>
                                                {/* The line below is the actual line for the timeline */}
                                                <div className="absolute h-full" style={divStyle}></div>
                                                <div className="flex items-center">
                                                    <div className="flex items-center absolute left-2" style={point}></div>
                                                    <p className="text-gray-700 text-base text-left py-4">{formatDate(event.date)}</p>
                                                </div>
                                                {event.image != '' &&
                                                    <img className="rounded-t-lg" src={event.image} />}
                                                <div className="mb-10 px-6 py-4 text-left max-w-sm rounded-b-lg overflow-hidden shadow-xl" key={event.id}>
                                                    <p className="font-bold text-xl mb-2">{event.title}</p>
                                                    <p className="text-gray-700 text-base">{event.info}</p>
                                                </div>
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

export default PoliticalLegal;