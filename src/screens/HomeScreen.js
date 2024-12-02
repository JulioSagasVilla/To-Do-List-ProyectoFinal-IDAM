import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function HomeScreen({ tasks }) {
  const pendingTasks = tasks.filter((task) => !task.completada).length;
  const completedTasks = tasks.filter((task) => task.completada).length;

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Resumen de Tareas
      </Typography>
      <Typography variant="h6">Tareas Pendientes: {pendingTasks}</Typography>
      <Typography variant="h6">Tareas Completadas: {completedTasks}</Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/add-task"
        sx={{ mt: 2 }}
      >
        Agregar Nueva Tarea
      </Button>
    </Box>
  );
}

export default HomeScreen;