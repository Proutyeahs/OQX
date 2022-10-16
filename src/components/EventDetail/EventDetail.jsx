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
            {/* back arrow button */}
            <div className="px-4" >
                <div className="text-left"><ArrowBackIosNewIcon style={{ cursor: 'pointer' }} variant="contained" onClick={() => handleBack(eventDetail.category_id)}></ArrowBackIosNewIcon>
                </div>
                <div className="text-right">
                    {/* edit event button if admin */}
                    {user.admin &&
                        <div><EditIcon style={{ cursor: 'pointer' }} variant="contained" color="success" onClick={() => history.push(`/eventFormEdit/${eventDetail.id}`)}></EditIcon>
                            {/* dispatches delete request */}
                            <DeleteIcon style={{ cursor: 'pointer' }} variant="contained" color="error"
                                onClick={handleDeleteEvent}></DeleteIcon>
                        </div>
                    }
                </div>
            </div>


            <div className="grid items-center justify-center y-screen">
                <div className="px-4 max-w-lg rounded overflow-hidden shadow-md bg-white">
                    {[eventDetail].map(event => (
                        <div key={event.id}>
                            <p className="font-bold text-xl">{formatDate(event.date)}</p>
                        </div>
                    ))}

                    {[eventDetail].map(event => (
                        <div key={event.id}>
                            <p className="font-bold text-2xl mb-2">{event.title}</p>
                        </div>
                    ))}

                    {[eventDetail].map(event => (
                        <div className="px-6 pt-1 pb-1" key={event.id}>
                            <img src={event.image} />
                        </div>
                    ))}

                    <div className="px-6 pt-1 pb-2 ">

                        {[eventDetail].map(event => (
                            <div key={event.id}>
                                <p className="text-gray-800 text-base text-left mb-4">{event.info}</p>
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
                        <div className="pt-2 pb-4">
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