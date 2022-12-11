import * as React from "react";
import {useEffect} from "react";
import {TodoItemDocument} from "../todo/interfaces";
import {createNewTodoItem, deleteNewTodoItem, fetchTodoItemLists, setTodoItemCheck} from "../../util/requests";
import Copyright from "../common/footer";
import { Checkbox, Container, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export default function TodoItems({ todoListID }: { todoListID: string }) {
    const [listOfTodoItems, setListOfTodoItems] = React.useState<Array<TodoItemDocument>>([]);
    const [isUpdated, setIsUpdated] = React.useState<string>("");
    const [newTodoItem, setNewTodoItem] = React.useState<string | null>(null);


    useEffect(() => {
        fetchTodoItemLists(todoListID)
            .then((response) => {
                if (response !== undefined) {
                    setListOfTodoItems(response.data)
                }
            })
    }, [todoListID, isUpdated])

    useEffect(() => {
        if (newTodoItem !== null) {
            createNewTodoItem(todoListID, { checked: false, title: newTodoItem })
                .then((response) => {
                    if (response !== undefined) {
                        setIsUpdated(Math.pow(Math.random(), Math.random()).toLocaleString())
                        setNewTodoItem(null)
                    }
                })
        }
    }, [newTodoItem])

    const onCreateNewTodoItem = (e: any) => {
        e.preventDefault()
        setNewTodoItem(e.target[1].value)
        console.log(todoListID, e.target[1].value)
        e.target[1].value = ""
    }

    const deleteTodoItem = (todoItemID: string) => {
        deleteNewTodoItem(todoItemID)
            .then(() => {
                setIsUpdated(Math.pow(Math.random(), Math.random()).toLocaleString())
            })
    }

    const setCheckTodoItem = (todoItemID: string, checked: boolean) => {
        setTodoItemCheck(todoItemID, checked)
            .then(() => {
                setIsUpdated(Math.pow(Math.random(), Math.random()).toLocaleString())
            })
    }

    const handleOnTodoItemCheck = (e: any) => {
        const isChecked = e.target.checked;
        const todoItemID = e.target.id;

        setCheckTodoItem(todoItemID, isChecked)

    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <br />

            <Grid container spacing={3}>
                {todoListID !== "" ? (
                    <Paper
                        sx={{
                            p: 2,
                            mb: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%'
                        }}
                    >
                        <form style={{"display": "flex", "flexDirection": "row", "width": "100%"}} onSubmitCapture={onCreateNewTodoItem}>
                        <span>
                            <Checkbox disabled icon={<AssignmentIcon />} checkedIcon={<AssignmentTurnedInIcon />} />
                        </span>
                            <span style={{"paddingTop": "5px", "width": "100%"}}>
                            <TextField  style={{"width": "100%"}} id={"item-title-new-" + todoListID} variant={"standard"} />
                        </span>
                            <button type={"submit"} hidden />
                        </form>
                    </Paper>
                ) : ( 
                    <Typography>Select a todo in list or create a new one</Typography>
                )}

                {listOfTodoItems && listOfTodoItems.map((item) => {
                    return (
                        <Paper key={item._id}
                            sx={{
                                p: 2,
                                mb: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%'
                            }}
                        >
                                <span>
                                    <Checkbox id={item._id} icon={<AssignmentIcon />} checkedIcon={<AssignmentTurnedInIcon />} onClick={handleOnTodoItemCheck} checked={item.checked}/>
                                </span>
                            <span style={{"paddingTop": "5px", "width": "100%"}}>
                                <TextField disabled={item.checked} style={{"width": "100%"}} id={"item-title-" + item._id} variant={"standard"} value={item.title} />
                            </span>
                            <span>
                                    <IconButton onClick={() => deleteTodoItem(item._id)} aria-label="delete" color="inherit">
                                        <DeleteIcon />
                                    </IconButton>
                                </span>
                        </Paper>
                    )
                })}

            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    )
}