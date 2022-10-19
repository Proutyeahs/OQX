import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import TextField from '@mui/material/TextField'; // MUI TEXTFIELD FOR SEARCH BAR
import SearchIcon from '@mui/icons-material/Search'; // MUI ICON FOR SEARCH BAR

function PoliticalLegal() {

    const events = useSelector((store) => store.event)
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');

    // function that shortens the description on the card.
    const shortenDescription = (description) => {
        return (description.split(' ').slice(0, 10).join(' '));
    }

    // move the user to the details page
    const handleClick = (id) => {
        console.log('Handle Click');
        console.log('ID', id)
        history.push(`/eventdetail/${id}`)
    }

    // dispatches a search word to check the database
    const handleSubmit = (e) => {
        console.log('Search input: ', search);
        e.preventDefault();
        dispatch({
            type: 'GET_SEARCHED_EVENTS',
            payload: {
                payload: ('%' + search + '%'),
                category: 1
            }
        })
        setSearch('')
    }

    // formats date
    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const point = {
        height: '25px',
        width: '25px',
        borderColor: '#1D68DE',
        borderWidth: '5px',
        backgroundColor: 'white',
        borderRadius: '50%',
        marginRight: '100px'
    }

    // display text if searched result is empty
    const noFoundEvents = () => {
        if (events.length === 0) {
            return <p>No Results Found!</p>
        }
    }

    useEffect(() => {
        dispatch({
            type: 'GET_EVENT',
            payload: 1
        })
    }, [])

    return (
        <>
            <section>
                <div className=" text-black">
                    <div className="container mx-auto flex flex-col items-start md:flex-row">
                        <div className="flex-col w-full sticky md:top-36 lg:w-1/3 md:mt-12 px-8">
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 flex text-center justify-center ">Politics & Law</p>
                            <p className="flex text-center text-sm md:text-base text-gray-900 mb-4">Explore the consequential political and legal events of queer history.</p>
                            <form onSubmit={handleSubmit} className="flex justify-center">
                                <TextField
                                    sx={{ backgroundColor: "white" }}
                                    name="outlined"
                                    label="Search"
                                    type="outlined"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}>
                                </TextField>
                            </form>
                            <form onSubmit={handleSubmit} className="flex justify-center">
                                <SearchIcon style={{ cursor: 'pointer' }} className="mt-4" variant="standard" onClick={handleSubmit}>Submit</SearchIcon>
                            </form>
                            {noFoundEvents()}
                        </div>

                        {/* This second chunk of DIVs contains the card for each individual item from the DB for the respective timeline*/}
                        <Fade bottom>
                            <div className="ml-0 md:ml-12 lg:w-2/3 sticky ">
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    <div className="relative border-l-[10px] border-[#1D68DE] dark:border-gray-700">
                                        <div className="mb-10 px-6 py-4 text-left max-w-sm rounded-b-lg overflow-hidden">
                                            {events.map(event => (
                                                <div key={event.id}>
                                                    <div className="absolute -left-[17px] mt-[23px]" style={point}></div>
                                                    <Fade bottom>
                                                        <div onClick={() => handleClick(event.id)}>
                                                            <div className="flex items-center">
                                                                <p className="text-gray-700 text-base text-left py-4">{formatDate(event.date)}</p>
                                                            </div>
                                                            {event.image != '' &&
                                                                <img className="rounded-t-lg" src={event.image} />}
                                                            <div className="mb-10 px-6 py-4 text-left max-w-sm rounded-b-lg overflow-hidden shadow-xl bg-white" key={event.id}>
                                                                <p className="font-bold text-xl mb-2">{event.title}</p>
                                                                <p className="text-gray-700 text-base">{shortenDescription(event.info)}...</p>
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {/* Card ends */}

                    </div>
                </div>
            </section >
        </>
    )
}

export default PoliticalLegal;