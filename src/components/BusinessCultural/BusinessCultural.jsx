import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

function BusinessCultural() {

    const dispatch = useDispatch();

    const events = useSelector((store) => store.event)

    // get the event data on page load/reload
    useEffect(() => {
        dispatch({
          type: 'GET_EVENT',
          payload: 3
        })
      }, [])

    return (
        <>
            {events.map(event => (
                <p>{ event.title }</p>
            ))}
        </>
    )
}

export default BusinessCultural;