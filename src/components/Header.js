import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          To-Do List App
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={RouterLink} to="/add-task">
          Agregar Tarea
        </Button>
        <Button color="inherit" component={RouterLink} to="/tasks">
          Lista de Tareas
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;