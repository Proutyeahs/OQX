import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

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
                                    Story
                                </TableCell>
                                <TableCell>
                                    Review
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {userStories.map(story => (
                                <TableRow key={story.id}>
                                    <TableCell>
                                        {story.title}:
                                        <br></br>
                                        {story.story}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack direction="row" spacing={2}>
                                            {/* pushes to edit user story page */}
                                            <EditIcon style={{ cursor: 'pointer' }} variant="contained" color="success" onClick={() =>
                                                dispatch({
                                                    type: 'APPROVE_USER_STORY',
                                                    payload: story.id
                                                })}>Approve</EditIcon>

                                            {/* Space between buttons */}
                                            &nbsp;

                                            {/* dispatches delete request */}
                                            <DeleteIcon style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() =>
                                                dispatch({
                                                    type: 'DELETE_STORY',
                                                    payload: story.id
                                                })}>Delete</DeleteIcon>
                                        </Stack>
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