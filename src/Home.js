import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { 
    makeStyles, AppBar,
    Toolbar, 
    IconButton, 
    Typography, 
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Box,
    Grid,
    Hidden,
} from '@material-ui/core';

import Videos from './Videos';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: theme.palette.background.dark, 
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    logo: {
        height: 25,
    },
    icons: {
        paddingRight: theme.spacing(1),
    },
    menuIcon: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(2)
    },
    grow: {
        flexGrow: 1,
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 8,
        paddingBottom: 8,
    }
})); 

function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <img src={theme.palette.type === 'dark'  ? '/images/branco.png' : '/images/preto.png'} alt="" className={classes.logo}/>

                    <div className={classes.grow}/>
                    
                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>

                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>
                <Hidden mdDown>
                    <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.listItemText
                                }} 
                                primary={'Início'} 
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><Subscriptions /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.listItemText
                                }} 
                                primary={'Em Alta'} 
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><Whatshot /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.listItemText
                                }} 
                                primary={'Inscrições'} 
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><VideoLibrary /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.listItemText
                                }} 
                                primary={'Biblioteca'} 
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary: classes.listItemText
                                }} 
                                primary={'Histórico'} 
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <Box p={2}>
                        <Typography variant='body2'>
                            Faça login para curtir vídeos, comentar e se inscrever.
                        </Typography>
                        <Box mt={2}>
                            <Button
                                variant='outlined'
                                color='secondary'
                                startIcon={<AccountCircle />}
                            >
                                Fazer Login
                            </Button>
                        </Box>
                    </Box>
                    <Divider />
                    </div>
                </Drawer>
                </Hidden>
                <Box p={3}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                    </Typography>

                    <Grid container spacing={3}>
                        {Videos.map((item, index) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box style={{ cursor: 'pointer' }}>
                                    <img 
                                        style={{ width: '100%' }}
                                        alt={ item.title }
                                        src={ item.thumb }
                                    />
                                    <Box>
                                        <Typography
                                            style={{ fontWeight: 600 }}
                                            gutterBottom
                                            variant='body1'
                                            color='textPrimary'
                                        >
                                            { item.title }
                                        </Typography>
                                        <Typography
                                            display='block'
                                            variant='body2'
                                            color='textSecondary'
                                        >
                                            { item.channel }
                                        </Typography>
                                        <Typography variant='body2' color='textSecondary'>
                                            {`${item.views} ⚬ ${item.date}`}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Box>
        </div>
    );
}

export default Home;