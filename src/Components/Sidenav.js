import React, { useState } from 'react';
import {
    Box,
    Drawer,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItemButton,
    ListItemText,
    styled,
    useTheme,
    Button,
    Grid,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ListsBox from './List';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import YardSharpIcon from '@mui/icons-material/YardSharp';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Sidenav() {
    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = useState(false);

    const drawerList = [
        {
            name: "OVERVIEW",
            items: ['Summary', 'Activity', 'Report', 'Dashboards']
        },
        {
            name: "ASSETS",
            items: ['Plants', 'Workcenters/Zone', 'Lines', 'Machines'],
        },
        {
            name: "PRODUCTS",
            items: ['Jobs'],
        }
    ]

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const listHover = {
        "&:hover": {
            color: "white",
            backgroundColor: '#3f5b70'
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={openDrawer} sx={{ backgroundColor: 'white', boxShadow: 0, height: 70, display: 'flex', justifyContent:'center' }}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={0}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(openDrawer && { display: 'none' }), color: 'gray' }}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6"  sx={{ color: "black " }} >
                                Plants</Typography>
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button variant="contained" sx={{ marginLeft: 'auto', borderRadius: '10px' }} startIcon={<DeleteIcon />} disabled >Delete</Button>
                                <Button variant="contained" sx={{ marginLeft: '10px', backgroundColor: 'rgba(95,74,210,1)', borderRadius: '10px' }} startIcon={<AddIcon />}>Add Plant</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* ------------------------------------Drawer ----------------------------------------------------- */}
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: 'rgba(4,47,66,1) ', width: 220,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }
                }}
                variant="persistent"
                anchor="left"
                open={openDrawer} >
                <DrawerHeader>
                    <YardSharpIcon sx={{ color: 'green', marginRight: 13 }} />
                    <IconButton sx={{ color: 'white' }} onClick={handleDrawerClose} >
                        {theme.direction === 'ltr' ? < MenuOpenIcon /> : <MenuIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    {drawerList.map((view, index) => (
                        <Box key={index}>
                            <Typography sx={{ fontSize: 16, marginLeft: 3, color: 'grey.400' }} >
                                {view.name}
                            </Typography>
                            {view.items.map((item, index) => (
                                <ListItemButton key={index} sx={listHover}>
                                    <ListItemText sx={{ fontWeight: 3, color: 'white', marginLeft: 4, }}>{item}</ListItemText>
                                </ListItemButton>
                            ))}
                            <Divider />
                        </Box>
                    ))}
                    <ListItemButton sx={{ display: 'flex', flexDirection: 'row', marginTop: 7 }}>
                        <NotificationsNoneTwoToneIcon sx={{ width: 20, color: 'white' }} />
                        <ListItemText sx={{ color: 'white', marginRight: 'auto' }}>Notification</ListItemText>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', flexDirection: 'row', marginTop: 'auto' }}>
                        <AccountCircleRoundedIcon sx={{ width: 20, color: 'white' }} />
                        <ListItemText sx={{ color: 'white', marginRight: 'auto' }}>User</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
            <Main open={openDrawer}>
                <DrawerHeader />
                <ListsBox />
            </Main>
        </Box>
    );
}