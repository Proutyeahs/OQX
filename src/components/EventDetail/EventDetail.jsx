import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './EventDetail.css'

function EventDetail(event) {
    //Declare history, dispatch, params, useSelectors
    const history = useHistory();
    const dispatch = useDispatch();

    const eventDetail = useSelector(store => store.specificEvent)
    const userStories = useSelector(store => store.userStories)
    const user = useSelector((store) => store.user)

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

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    {[eventDetail].map(event => (
                        <div key={event.id}>
                            <p className='font-bold text-xl-2'>{formatDate(event.date)}</p>
                        </div>
                    ))}

                    {[eventDetail].map(event => (
                        <div key={event.id}>
                            <p className='font-bold text-xl mb-2'>{event.title}</p>
                        </div>
                    ))}

                    {[eventDetail].map(event => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={event.id}>
                            <img src={event.image} />
                        </div>
                    ))}
                    <br></br>
                    <div className="px-6 py-4">

                        {[eventDetail].map(event => (
                            <div key={event.id}>
                                <p className="text-gray-800 text-base text-left">{event.info}</p>
                            </div>
                        ))}
                        <br></br>
                        <br></br>

                        {[eventDetail].map(event => (
                            <div className="text-gray-600 text-base text-left" key={event.id}>
                                <a href={event.references}>References: {event.references}</a>
                                <div className='center'>
                                    <Button variant="contained" onClick={() => handleBack(event.category_id)}>Go back</Button></div>
                            </div>
                        ))}

                        {/* edit event button if admin */}
                        {user.admin &&
                            <EditIcon className='right' style={{ cursor: 'pointer' }} variant="contained" color="success" onClick={() => history.push(`/eventFormEdit/${eventDetail.id}`)}>Edit Event</EditIcon>
                        }

                    </div>
                    <div>
                        <br></br>
                        <div className="px-6 py-4">
                            {/* button for adding a story */}
                            <div>
                                <Button variant="contained" color="success" onClick={() => history.push(`/userStoriesForm/${eventDetail.id}`)}>Add A Story</Button>
                            </div>
                            {userStories.map(story => (
                                <div key={story.id}>
                                    <p>{story.displayName}:</p>
                                    <p className="text-gray-800 text-base text-left">{story.story}</p>

                                    {/* delete story if its the users story */}
                                    {user.id === story.user_id &&
                                        <DeleteIcon className='right' style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() => handleDelete(story.id)}>Delete</DeleteIcon>
                                        || user.admin &&
                                        <DeleteIcon className='right' style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() => handleDelete(story.id)}>Delete</DeleteIcon>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventDetail;