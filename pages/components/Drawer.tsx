import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LogoutIcon from '@mui/icons-material/Logout';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useRouter } from 'next/router';
import Link from 'next/link';

const drawerWidth = 240;

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MaterialDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface DrawerProps {
  children: JSX.Element;
}

export default function Drawer(props: DrawerProps) {
  const router = useRouter();

  const isCurrentRoute = (pathName: string): boolean => {
    return router.pathname.slice(1) === pathName.toLowerCase();
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MaterialDrawer variant="permanent" open={false}>
        <Link href='/'>
          <IconButton>
            <YouTubeIcon sx={{ color: 'red', fontSize: '32px' }} />
          </IconButton>
        </Link>
        <Divider />
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%' }}>
          <List>
            {['Projects', 'Users', 'Settings'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <Link href={text.toLowerCase()}>
                  <ListItemButton
                    selected={isCurrentRoute(text) ? true : false}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: 48,
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 'auto',
                        justifyContent: 'center',
                        color: isCurrentRoute(text) ? 'blue' : 'rgba(0, 0, 0, 0.54)',
                      }}
                    >
                      {index === 0 ? <PlayCircleFilledIcon />
                        : index === 1 ? <ContactPageIcon />
                        : index === 2 ? <SettingsIcon />
                        : null
                      }
                    </ListItemIcon>
                    <ListItemText 
                      primary={text}
                      primaryTypographyProps={{ 
                        fontSize: 10,
                        color: router.pathname.slice(1) === text.toLowerCase() ? 'blue' : 'rgba(0, 0, 0, 0.54)',
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem key={'Logout'} disablePadding sx={{ display: 'block' }}>
              <Link href='logout'>
                <ListItemButton
                  selected={isCurrentRoute('logout') ? true : false}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',
                      justifyContent: 'center',
                      color: isCurrentRoute('logout') ? 'blue' : 'rgba(0, 0, 0, 0.54)',
                    }}
                  >
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText
                   primary={'Logout'}
                   primaryTypographyProps={{ 
                    fontSize: 10,
                    color: isCurrentRoute('logout') ? 'blue' : 'rgba(0, 0, 0, 0.54)',
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </MaterialDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: '0 5rem' }}>
        {props.children}
      </Box>
    </Box>
  );
}
