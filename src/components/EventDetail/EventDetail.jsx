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
    //const user = useSelector(store => store.user)

    //console.error('eventSpecificReducer', eventDetail);

    console.log('eventDetail should give event', event)
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
}

return(
    <>
    {[eventDetail].map(event =>(
        <div key={event.id}>
            <p >{event.title}</p>
        </div>
    ))}
    </>
)
}

export default EventDetail;