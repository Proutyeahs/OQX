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
    
    // TODO: Delete this block before handoff:
    const handleDummyData = () => {
        console.log('HandleDummyData')
        setStory({user_id: user.id, story: 'At first, I was absolutely terrified, because I thought it could/would happen to me if I ever came out. However, the subsequent outpouring of support and advocacy ended up making me more comfortable and empowered to come out when I did. The work that the Mathew Shepard Foundation does, has likely saved the lives of hundreds if not thousands of young queer people.', timelineEvent: Number(id)})
        console.log(story);
    }

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

    console.log(story);

    return (
        <>
            <h1 className="font-bold" onClick={handleDummyData}>Submit A Story</h1>
            <div className="center">

                {/* MUI STACK */}
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={2}>
                        <Item>

                            {/* User Story */}
                            <div>
                                {/* <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline rows={3} type="text" placeholder="User Story" onChange={(e) => setStory({ ...story, story: e.target.value })} /> */}
                                <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline rows={3} type="text" placeholder="User Story" value = {story.story} onChange={(e) => setStory(e.target.value)} />
                            </div>

                            {/* SUBMIT */}
                            <div>
                                <Button variant="outlined" color="success" onClick={submit}>Submit</Button>
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