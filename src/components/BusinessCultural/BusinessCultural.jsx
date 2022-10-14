import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField'; // MUI TEXTFIELD FOR SEARCH BAR
import SearchIcon from '@mui/icons-material/Search'; // MUI ICON FOR SEARCH BAR

function BusinessCultural() {

    const events = useSelector((store) => store.event)
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('')

    // function that shortens the description on the card.
    const shortenDescription = (description) => {
        return (description.split(' ').slice(0, 10).join(' '));
    }

    // moves user to the details page
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
                category: 3
            }
        })
        setSearch('')
    }

    // formats the date
    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const point = {
        height: '25px',
        width: '25px',
        borderWidth: '5px',
        backgroundColor: 'white',
        borderRadius: '50%',
        marginRight: '100px',
        borderColor: '#F3D73C',
    }


    useEffect(() => {
        dispatch({
            type: 'GET_EVENT',
            payload: 3
        })
    }, [])

    return (
        <>
            <section>
                <div className=" text-black">
                    <div className="container mx-auto flex flex-col items-start md:flex-row">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 md:mt-12 px-8">
                            <p className="text-gray-900 uppercase tracking-loose w-30"></p>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Business Cultural</p>
                            <p className="text-sm md:text-base text-gray-900 mb-4">Explore the consequential business and cultural events of queer history.</p>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    sx={{backgroundColor:"white" }} 
                                    name="outlined"
                                    label="Search"
                                    type="outlined"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}>
                                </TextField>
                            </form>
                            <form onSubmit={handleSubmit}>
                                <SearchIcon style={{ cursor: 'pointer' }} className="mt-4" variant="standard" onClick={handleSubmit}>Submit</SearchIcon>
                            </form>
                        </div>
                        {/* This second chunk of DIVs contains the card for each individual item from the DB for the respective timeline*/}
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky ">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className="relative border-l-[10px] border-[#F3D73C] dark:border-gray-700">
                                    <div className="mb-10 px-6 py-4 text-left max-w-sm rounded-b-lg overflow-hidden">
                                        {events.map(event => (
                                            <div key={event.id}>
                                                <div onClick={() => handleClick(event.id)}>
                                                    <div className="flex items-center">
                                                        <div className="absolute -left-[17px]" style={point}></div>
                                                        <p className="text-gray-700 text-base text-left py-4">{formatDate(event.date)}</p>
                                                    </div>
                                                    {event.image != '' &&
                                                        <img className="rounded-t-lg" src={event.image} />}
                                                    <div className="mb-10 px-6 py-4 text-left max-w-sm rounded-b-lg overflow-hidden shadow-xl  bg-white" key={event.id}>
                                                        <p className="font-bold text-xl mb-2">{event.title}</p>
                                                        <p className="text-gray-700 text-base">{shortenDescription(event.info)}...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default BusinessCultural;