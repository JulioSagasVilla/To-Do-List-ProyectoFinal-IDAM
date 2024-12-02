import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddTask({ addTask }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('trabajo');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      nombre,
      descripcion,
      tipo,
      completada: false,
    };
    addTask(newTask);
    navigate('/tasks');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Agregar Nueva Tarea
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Tipo"
          variant="outlined"
          fullWidth
          select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="trabajo">Trabajo</MenuItem>
          <MenuItem value="casa">Casa</MenuItem>
          <MenuItem value="negocios">Negocios</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Agregar Tarea
        </Button>
      </Box>
    </Container>
  );
}

export default AddTask;