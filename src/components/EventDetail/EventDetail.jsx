import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';

function EventDetail (event){
    //Declare history, dispatch, params, useSelectors
    const history = useHistory();
    const dispatch = useDispatch();

    const eventDetail = useSelector(store => store.specificEvent)
    const userStories = useSelector(store => store.userStories)


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
    let {id} = useParams();

const reload = () => {
    dispatch({
        type: 'GET_SPECIFIC_EVENT',
        payload: id
    })
    dispatch({
        type: 'GET_STORY',
        payload: id
    }) 
}

return(
    <>
    <div className="flex items-center justify-center">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    {[eventDetail].map(event =>(
        <div key={event.id}>
            <p className='font-bold text-xl-2'>{formatDate(event.date)}</p>
        </div>
        
    ))}
    {[eventDetail].map(event =>(
        <div key={event.id}>
            <p className='font-bold text-xl mb-2'>{event.title}</p>
        </div>  
    ))}

    

    {[eventDetail].map(event =>(
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={event.id}>
        <img  src={event.image} />
        </div>
        
    ))}
    <br></br>
    <div className="px-6 py-4">
    {[eventDetail].map(event =>(
        <div key={event.id}>
            <p className = "text-gray-800 text-base text-left">{event.info}</p>
        </div>
        
    ))}

    
    <br></br>
    <br></br>

    {[eventDetail].map(event =>(
        <div className = "text-gray-600 text-base text-left" key={event.id}>
            <a href={event.references}>References: {event.references}</a>
        </div>
        
    ))}
            </div>    
        </div>
        {[userStories].map(story =>(
        <div key={story.id}>
            <p className = "text-gray-800 text-base text-left">{story.story}</p>
        </div>
        
    ))}
    </div>
    </>
)
}

export default EventDetail;