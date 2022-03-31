// The following imports give our project access to the components inside of Material-UI, 
// our first react hooks (useState & useNavigate), Material-UI icons, and our theme.  
import React, { useState } from 'react';
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Box,
    CssBaseline,
    Dialog, // new item
    DialogActions, // new item
    DialogContent, // new item
    DialogContentText, // new item
    DialogTitle // new item
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { theme } from '../../Theme/themes';
import { DataTable, DroneForm, SignIn } from '../../components'; // Add this import to the bottom of the other imports inside of


// style our newly imported components with our theme just by passing in an object 
// to the sx property of each of them. 
const drawerWidth = 240;

const myStyles = {
    appBar : {
        backgroundColor: theme.palette.secondary.main,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        backgroundColor: theme.palette.secondary.main,
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    hide: {
    display: 'none',
    },
    drawer: {
    width: drawerWidth,
    flexShrink: 0
    },
    drawerPaper: {
    width: drawerWidth,
    },
    drawerHeader: {
    display: 'flex',
    width: drawerWidth,
    alignItems: 'center',
    padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    },
    content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    },
    contentShift: {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    },
    toolbar:{
    display: 'flex',
    },
    toolbar_button: {
    marginLeft: 'auto',
    backgroundColor: theme.palette.primary.contrastText
    }
};

export const Dashboard = () => {
    //The first 2 lines are using React Hooks to create a navigation 
    // function and set classic state properties. 
    const navigate = useNavigate();
    //Creates two values: A variable called open and a function that will set that variable value called setOpen . 
    // This is what the useState hook does specifically. 
    const [open, setOpen] = useState(false);
    const auth = getAuth();
    const [ dialogOpen, setDialogOpen ] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    // The next 2 functions use the classic state properties.
    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }
    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }
    // an array of objects that we will use to specify side menu values 
    //and in which direction the router will take them when clicked.
    const itemsList = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        
        {
            text: 'Sign In',
            onClick: () => navigate('/signin')
        }
    ]
    if (!user){
        return (<SignIn />)
    }else{
    return(
        // allows our component to render a top bar with an icon at a position=fixed to the top. 
        //We then style it with a the sx prop and switch it based on the state of “open”. 
        <Box sx={{display:'flex'}}>
            <CssBaseline />
            <AppBar
                sx={open ? myStyles.appBarShift : myStyles.appBar}
                position='fixed'>
                    <Toolbar sx={myStyles.toolbar}>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            onClick={handleDrawerOpen}
                            edge='start'
                            sx={open ? myStyles.hide : myStyles.menuButton}>
                                <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' noWrap>Dashboard</Typography>
                        <Button sx={myStyles.toolbar_button} onClick={handleDialogOpen}>Create New Drone</Button>
                        {/* Dialog Popup */}
                        <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby='form-dialog-title'>
                            <DialogTitle id='form-dialog-title'> Add New Drone </DialogTitle>
                            <DialogContent>
                                <DialogContentText>Your Drone is almost here</DialogContentText>
                                <DroneForm />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogClose} color='warning'></Button>
                            </DialogActions>
                        </Dialog>
                    </Toolbar>
            </AppBar>

            <MUIDrawer 
            //accomplish displaying our navigation options. 
            //Only showing the things that are present inside of the itemsList that we created a few moments before.
                sx={ open ? myStyles.drawer : myStyles.hide}
                variant='persistent'
                anchor = 'left'
                open={open}
                style={{width: drawerWidth}}>
                    <Box sx={myStyles.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                        </IconButton>
                    </Box>
                    <Divider />
                    <List>
                        {/* loops over or rather maps over the contents of the itemsList */}
                        { itemsList.map( (item) => { 
                            const { text, onClick } = item;
                            return (
                                <ListItem button key={text} onClick={onClick}>
                                    <ListItemText primary = {text}/>
                                </ListItem>
                            );
                        })}
                    </List>
            </MUIDrawer>
            {/* we display the data we wish to see here, styling it with classes we again created a few moments before.  
            The Box component is basically a div that we use to access our theme. (a regular div won’t connect
             to the theme to be styled) */}
                <Box sx={myStyles.content}>
                    <Box sx={myStyles.drawerHeader}>
                    </Box>
                            <h1>Hello World Until Data Shows Up.</h1>
                            <DataTable />
                </Box>
        </Box>
    )
}}