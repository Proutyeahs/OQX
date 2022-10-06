import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function UserStoriesReview() {

    // get the data for user stories on page load/reload
    useEffect(() => {
        dispatch({
            type: 'GET_USER_STORIES'
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();

    const userStories = useSelector((store) => store.userStories)

    return (
        <>
            <div className="center">
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Event
                                </TableCell>
                                <TableCell>
                                    Story
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {userStories.map(userStories => (
                                <TableRow key={userStories.id}>
                                    <TableCell>
                                        {userStories.title}:
                                        <br></br>
                                        {userStories.story}
                                    </TableCell>
                                    <TableCell>

                                        {/* pushes to edit user story page */}
                                        <Button variant="contained" color="success" onClick={() => history.push(`/userStoriesFormEdit/${userStories.id}`)}>Edit</Button>

                                        {/* Space between buttons */}
                                        &nbsp;

                                        {/* dispatches delete request */}
                                        <Button variant="contained" color="error" onClick={() =>
                                            dispatch({
                                                type: 'DELETE_USER_STORY',
                                                payload: event
                                            })}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default UserStoriesReview;