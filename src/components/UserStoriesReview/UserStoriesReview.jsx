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
import AddTaskIcon from '@mui/icons-material/AddTask';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import Paper from '@mui/material/Paper';

// TABLE MUI FUNCTIONS
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.common.white,
        fontSize: 20
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
})); // END TABLE MUI FUNCTIONS

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
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>
                                    Story
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    Review
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {userStories.map(story => (
                                <StyledTableRow key={story.id}>
                                    <TableCell>
                                        {story.title}:
                                        <br></br>
                                        {story.story}
                                    </TableCell>
                                    <StyledTableCell align="right">
                                        <Stack direction="row" spacing={2}>
                                            {/* pushes to edit user story page */}
                                            <AddTaskIcon style={{ cursor: 'pointer' }} variant="contained" color="success" onClick={() =>
                                                dispatch({
                                                    type: 'APPROVE_USER_STORY',
                                                    payload: story.id
                                                })}>Approve</AddTaskIcon>

                                            {/* Space between buttons */}
                                            &nbsp;

                                            {/* dispatches delete request */}
                                            <DeleteIcon style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() =>
                                                dispatch({
                                                    type: 'DELETE_STORY',
                                                    payload: story.id
                                                })}>Delete</DeleteIcon>
                                        </Stack>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default UserStoriesReview;