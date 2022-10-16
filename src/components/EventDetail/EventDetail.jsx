import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './EventDetail.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function EventDetail(event) {
    //Declare history, dispatch, params, useSelectors
    const history = useHistory();
    const dispatch = useDispatch();

    const eventDetail = useSelector(store => store.specificEvent)
    const userStories = useSelector(store => store.userStories)
    const user = useSelector((store) => store.user)
    const specificEvent = useSelector((store) => store.specificEvent);

    console.log('eventDetail should give event', event)

    //formatDate is used to make our timestamps pretty
    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    //GET DETAILS
    useEffect(() => {
        reload(id)
    }, []);
    let { id } = useParams();

    const reload = () => {
        dispatch({
            type: 'GET_SPECIFIC_EVENT',
            payload: id
        })
        // This is getting the stories for this event.
        dispatch({
            type: 'GET_STORY',
            payload: id
        })
    }

    // deletes a users story
    const handleDelete = (notid) => {
        dispatch({
            type: 'DELETE_STORY',
            payload: notid
        })
        setTimeout(() => {
            reload()
        }, 500)
    }

    console.log('userStories reducer: ', userStories)

    // This function takes the user back to the previous timeline that they were on.
    // Action is being passed through on the onClick.
    const handleBack = (action) => {
        console.log('Takes the user back to this timeline: ', action);
        switch (action) {
            case 1:
                history.push('/politicalLegal')
                break;
            case 2:
                history.push('/medicalScientific')
                break;
            case 3:
                history.push('/businessCultural')
            default:
                break;
        }
    }
    //Deletes entire event from timeline
    const handleDeleteEvent = () => {
        dispatch({
            type: 'DELETE_EVENT',
            payload: specificEvent
        })
        setTimeout(() => {
            history.push('/eventReview')
        }, 500)
    }

    return (
        <>

            <div className="grid items-center justify-center y-screen">
                {/* main body contains date, event title, image, info on event, and references  */}
                <div className="max-w-lg rounded overflow-hidden shadow-md bg-white">
                    {/* back arrow button */}
                    <div className="text-left"><ArrowBackIosNewIcon style={{ cursor: 'pointer' }} variant="outlined" onClick={() => handleBack(eventDetail.category_id)}></ArrowBackIosNewIcon>
                    </div>

                    <div className="pb-2 max-w-lg font-bold text-xl">

                        {/* edit event button if admin */}
                        {user.admin &&

                            <div className="pt-2 space-x-6 text-center">Admin:<br></br><Button style={{ cursor: 'pointer' }} variant="outlined" startIcon={<EditIcon />} color="success" onClick={() => history.push(`/eventFormEdit/${eventDetail.id}`)}>Edit Event</Button>
                                {/* dispatches delete request */}
                                <Button style={{ cursor: 'pointer' }} variant="outlined" startIcon={<DeleteIcon />} color="error"
                                    onClick={handleDeleteEvent}>Delete Event</Button>
                            </div>
                        }

                    </div>

                    {/* event date */}

                    {[eventDetail].map(event => (
                        <div key={event.id}>
                            <p className="text-center font-bold text-2xl pb-2">{formatDate(event.date)}</p>
                        </div>
                    ))}

                    {/* event title */}
                    {[eventDetail].map(event => (
                        <div key={event.id}>
                            <p className="px-4 font-bold text-3xl mb-2 text-left">{event.title}</p>
                        </div>
                    ))}

                    {/* image */}
                    {[eventDetail].map(event => (
                        <div className="px-6 pt-1 pb-1" key={event.id}>
                            <img src={event.image} />
                        </div>
                    ))}

                    <div className="px-6 pt-1 pb-4">
                        {/* event info */}
                        {[eventDetail].map(event => (
                            <div className="mb-4" key={event.id}>
                                <p className="text-gray-800 text-base text-left">{event.info}</p>
                            </div>

                        ))}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography
                                    sx={{
                                        fontSize: 18
                                    }}
                                >
                                    <p>References</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {[eventDetail].map(event => (

                                        <p>{event.references}</p>


                                    ))}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                    </div>
                </div>

                <br></br>
                <div className="px-6 py-4 max-w-lg rounded overflow-hidden shadow-md bg-white">

                    <div >
                        {/* button for adding a story */}
                        <div className="text-center pt-2 pb-4">
                            <Button variant="outlined" startIcon={<AddIcon />} color="success" onClick={() => history.push(`/userStoriesForm/${eventDetail.id}`)}>Share Your Story</Button>
                        </div>
                        {userStories.map(story => (
                            <div className="px-6 py-4 mb-5 ml-3 justify-between items-center p-2 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600 bg-white" key={story.id}>
                                <div className="container mx-auto text-gray-800 text-base">{story.story}
                                    {/* delete story if its the users story */}
                                    {user.id === story.user_id &&
                                        <DeleteIcon className='text-right' style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() => handleDelete(story.id)}>Delete</DeleteIcon>
                                        || user.admin &&
                                        <DeleteIcon className='text-right' style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() => handleDelete(story.id)}>Delete</DeleteIcon>
                                    }
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )
}

export default EventDetail;