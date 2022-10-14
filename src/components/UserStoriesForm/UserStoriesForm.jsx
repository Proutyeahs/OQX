import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

//MUI STACK LAYOUT

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// MUI STACK LAYOUT STYLING
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
})); // end MUI STYLING

function UserStoriesForm() {
    const user = useSelector((store) => store.user)
    // gets specific event info on load/reload
    useEffect(() => {
        reload(id)
    }, [])
    let { id } = useParams()
    const reload = (id) => {
        console.log(id)
        dispatch({
            type: 'GET_EVENT_DETAILS',
            payload: id
        })
    }

    const dispatch = useDispatch();
    const history = useHistory();

    // local state of information to be submitted
    const [story, setStory] = useState({ user_id: user.id, story: '', timelineEvent: Number(id) })

    // handle dispatch of information
    const submit = () => {
        console.log(story)
        dispatch({
            type: 'POST_STORY',
            payload: story
        })
        // popup to thanks for submission
        setTimeout(() => {
            history.push(`/eventdetail/${id}`)
        }, 500)
    }

    return (
        <>
            <h1 className="font-bold">Submit A Story</h1>
            <div className="center">

                {/* MUI STACK */}
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={2}>
                        <Item>

                            {/* User Story */}
                            <div>
                                <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline rows={3} type="text" placeholder="User Story" onChange={(e) => setStory({ ...story, story: e.target.value })} />
                            </div>

                            {/* SUBMIT */}
                            <div>
                                <Button variant="contained" color="success" onClick={submit}>Submit</Button>
                            </div>

                            {/* MUI STACK END */}
                        </Item>
                    </Stack>
                </Box>
            </div>
        </>
    )
}

export default UserStoriesForm;