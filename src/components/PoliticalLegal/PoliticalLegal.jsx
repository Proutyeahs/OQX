import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

function PoliticalLegal() {

    const dispatch = useDispatch();

    const events = useSelector((store) => store.event)

    // get the event data on page load/reload
    useEffect(() => {
        dispatch({
          type: 'GET_EVENT',
          payload: 1
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

export default PoliticalLegal;