import React from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CheckCircle, Delete, Visibility } from '@mui/icons-material';

function TaskList({ tasks, completeTask, deleteTask }) {
  const pendingTasks = tasks.filter((task) => !task.completada);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Tareas Pendientes
      </Typography>
      {pendingTasks.length === 0 ? (
        <Typography variant="h6">No hay tareas pendientes.</Typography>
      ) : (
        <List>
          {pendingTasks.map((task) => (
            <ListItem key={task.id} sx={{ bgcolor: '#fff', mb: 1 }}>
              <ListItemText
                primary={task.nombre}
                secondary={`Tipo: ${task.tipo}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  color="success"
                  onClick={() => completeTask(task.id)}
                >
                  <CheckCircle />
                </IconButton>
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => deleteTask(task.id)}
                >
                  <Delete />
                </IconButton>
                <IconButton
                  edge="end"
                  component={RouterLink}
                  to={`/tasks/${task.id}`}
                >
                  <Visibility />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default TaskList;