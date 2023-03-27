import React, { useState, useEffect } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Link,
  IconButton,
  Typography,
  Paper,
} from '@mui/material';
import { ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProjectsIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';

import { styled } from '@mui/system';
import { Title, Text } from '../';

const CustomListItemButton = styled(ListItemButton)(
  ({ theme, isMinimized }) => {
    const currentTheme = useTheme();

    return {
      '&:hover': {
        backgroundColor: currentTheme.palette.primary.main,
        transition: 'background-color 0.2s',
        '& .MuiListItemIcon-root': {
          color: currentTheme.palette.primary.contrastText,
          fontSize: isMinimized ? '1rem' : '1rem',
        },
        '& .MuiListItemText-root': {
          color: currentTheme.palette.primary.contrastText,
        },
        '& .MuiSvgIcon-root': {
          // Add this block to change the arrow icon color on hover
          color: currentTheme.palette.primary.contrastText,
        },
      },
      '&:active': {
        backgroundColor: currentTheme.palette.action.selected,
        transition: 'background-color 0.2s',
      },
      '& .MuiListItemButton-root': {
        borderRadius: '0.375rem',
      },
      '& .MuiListItemIcon-root': {
        paddingLeft: isMinimized ? 0 : '8px',
      },
      '& .MuiListItemText-root': {
        paddingRight: isMinimized ? 0 : '8px',
      },

      borderRadius: 12,
    };
  }
);

const menuItems = [
  {
    label: 'Dashboard',
    link: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    label: 'Components',
    link: '/projects',
    icon: <ProjectsIcon />,
    children: [
      {
        label: 'Tables',
        link: '/tables/paginated',
        children: [
          { label: 'Paginated', link: '/tables/paginated' },
          { label: 'Transparent', link: '/tables/transparent' },
          { label: 'Background', link: '/tables/background' },
        ],
      },
      { label: 'Card', link: '/card' },
    ],
  },
  {
    label: 'Settings',
    link: '/settings',
    icon: <SettingsIcon />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState({});
  const [isMinimized, setIsMinimized] = useState(false);
  const currentTheme = useTheme();
  const handleClick = (index) => {
    setOpen((prevOpen) => ({ ...prevOpen, [index]: !prevOpen[index] }));
  };
  useEffect(() => {
    if (isMinimized) {
      setOpen({});
    }
  }, [isMinimized]);

  const renderMenuItems = (items, depth = 0, isMinimized = false) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <React.Fragment key={index}>
            <CustomListItemButton
              isMinimized={isMinimized}
              onClick={() => handleClick(index)}
              sx={{
                // paddingLeft: depth * 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 1,
                paddingLeft: isMinimized ? 1 : depth * 10,
              }}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              {!isMinimized && (
                <>
                  <ListItemText
                    primary={item.label}
                    sx={{ marginTop: '7px' }}
                  />

                  {open[index] ? <ExpandLess /> : <ExpandMore />}
                </>
              )}
            </CustomListItemButton>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuItems(
                  item.children,
                  0.7
                  // depth == 0.7 ? depth + 0.3 : 0.7
                  // depth > 0 ? depth + 0.7 : depth + 0.7
                )}
              </List>
            </Collapse>
          </React.Fragment>
        );
      } else {
        return (
          <CustomListItemButton
            key={index}
            isMinimized={isMinimized}
            component={Link}
            href={item.link}
            sx={{
              // paddingLeft: depth * 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingBottom: 1,
              paddingLeft: isMinimized ? 1 : depth * 10,
            }}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            {!isMinimized && (
              <ListItemText primary={item.label} sx={{ marginTop: '7px' }} />
            )}
          </CustomListItemButton>
        );
      }
    });
  };

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: 1,
        backgroundColor: currentTheme.palette.background.paper,
      }}
    >
      <List
        sx={{
          width: isMinimized ? '64px' : '100%',
          maxWidth: isMinimized ? '55px' : '320px',
          backgroundColor: 'transparent',
          overflow: 'auto',
          maxHeight: '100vh',
          minHeight: '100vh',
          padding: '8px 8px',
          position: 'relative',
          ...(isMinimized ? { overflowX: 'hidden' } : {}),
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: currentTheme.palette.primary.light,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: currentTheme.palette.primary.main,
            borderRadius: '3px',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingBottom: 20,
            paddingLeft: isMinimized ? 1 : 2,
          }}
        >
          {!isMinimized && (
            <Title variant="h6" sx={{ fontWeight: 'bold' }}>
              Website
            </Title>
          )}
          <IconButton
            onClick={() => setIsMinimized(!isMinimized)}
            sx={{
              zIndex: 2,
            }}
          >
            {isMinimized ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        {renderMenuItems(menuItems, 0, isMinimized)}
      </List>
    </Paper>
  );
};

export default Sidebar;
