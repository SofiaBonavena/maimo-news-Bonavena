import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'

export default function TemporaryDrawer({ isOpen, toggleDrawer }) {

    const secciones = [
        { label: "Politica", url: "politica" },
        { label: "Internacionales", url: "internacionales" },
        { label: "Tecnologia", url: "tecnologia" },
        { label: "Escpectaculos", url: "espectaculos" },
        { label: "Deportes", url: "deportes" },
        { label: "Diseño", url: "diseno" },
        { label: "Gaming", url: "gaming" }
    ]

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {secciones.map(({ label, url }) =>
                    <Link to={`/category/${url}`}>
                        <ListItem button>
                            <ListItemIcon>
                                {<MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                )}
            </List>
        </Box>
    );

    return (
        <div>

            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={toggleDrawer}
            >
                {list('left')}
            </Drawer>

        </div>
    );
}