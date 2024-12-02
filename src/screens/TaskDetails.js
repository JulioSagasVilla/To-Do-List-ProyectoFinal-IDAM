import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';

function TaskDetails({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h6">Tarea no encontrada.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la Tarea
      </Typography>
      <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 1 }}>
        <Typography variant="h5" gutterBottom>
          {task.nombre}
        </Typography>
        <Typography variant="body1" paragraph>
          {task.descripcion}
        </Typography>
        <Typography variant="body1">Tipo: {task.tipo}</Typography>
        <Typography variant="body1">
          Estado: <strong>{task.completada ? 'Completada' : 'Pendiente'}</strong>
        </Typography>
      </Box>
    </Container>
  );
}

export default TaskDetails;