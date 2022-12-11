import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Button, ListItemButton, Modal, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TodoItems from "../todo_items";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {createNewTodoList, deleteTodoList, fetchTodoList} from "../../util/requests";
import {useEffect} from "react";
import { TodoDocument } from '../todo/interfaces';

const drawerWidth: number = 240;

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

export default function DashboardContent() {
    const [todos, setTodos] = React.useState<Array<TodoDocument>>([]);
    const [open, setOpen] = React.useState(true);
    const [openModal, setOpenModal] = React.useState(false);
    const [isTodoListUpdated, setIsTodoListUpdated] = React.useState("");
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [selectedTodoList, setSelectedTodoList] = React.useState({id: "", title: ""});

    const changeSelectedTodoList = (id: string, title: string) => {
        console.log(id, title)
        setSelectedTodoList({id, title});
    }
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleModalFormSubmit = (e: any) => {
        e.preventDefault()
        const inputValue = e.target[0].value;
        createNewTodoList(inputValue)
            .then(() => {
                setIsTodoListUpdated(Math.pow(Math.random(), Math.random()).toLocaleString())
                handleCloseModal()
            })
    }

    useEffect(() => {
        fetchTodoList()
            .then((response) => {
                if (response !== undefined) {
                    setTodos(response.data);
                }
            })
    }, [isTodoListUpdated])

    const onDeleteHandle = (id: string) => {
        deleteTodoList(id)
            .then(() => {
                setIsTodoListUpdated(Math.pow(Math.random(), Math.random()).toLocaleString())
                setSelectedTodoList({id: "", title: ""})
            })
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            {selectedTodoList.title !== "" ? selectedTodoList.title : "Todo Dashboard"}
                        </Typography>
                        {
                            selectedTodoList.id !== "" &&
                            <IconButton onClick={() => onDeleteHandle(selectedTodoList.id)} aria-label="delete" color="inherit">
                                <DeleteIcon />
                            </IconButton>
                        }

                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">

                        <Button onClick={handleOpenModal} style={{"width": "100%"}} variant="outlined" endIcon={<AddCircleIcon />}>
                            New
                        </Button>

                        { todos && todos.map((todo) => {
                            return (
                                <ListItemButton onClick={() => { changeSelectedTodoList(todo._id, todo.title)}} key={todo._id}>
                                    {todo.title}
                                </ListItemButton>
                            )
                        })}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <TodoItems todoListID={selectedTodoList.id}/>
                </Box>
            </Box>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="create-new-todo-modal"
            >
                <Box sx={modalStyle}>
                    <Typography id="create-new-todo-modal-title" variant="h6" component="h2" color="black">
                        Create new Todo List
                    </Typography>
                    <br />
                    <form style={{"width": "100%", "display": "flex"}} onSubmit={handleModalFormSubmit}>
                        <TextField style={{"width": "100%"}} size={"small"} id="new-todo-list" label="List Name" variant="outlined" />
                        <Button style={{"marginLeft": "5px", "marginTop": "1.5px"}} type={"submit"} variant={"outlined"}>Create</Button>
                    </form>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}
