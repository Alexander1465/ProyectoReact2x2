import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Checkbox, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [data, setData] = React.useState({
    nombre: '',
    apellido: '',
    edad: '',
    genero: '',
    lenguaje: '',
    estrellas: 0,
    check: false,
  });
  const [open, setOpen] = React.useState(false); 
  const [error, setError] = React.useState(false);

  const handleSubmit = () => {
    if (data.nombre && data.apellido && data.edad && data.genero && data.lenguaje && data.check) {
      console.log(data); 
      setOpen(true); 
    } else {
      setError(true); 
    }
  };

  const handleClear = () => {
    setData({
      nombre: '',
      apellido: '',
      edad: '',
      genero: '',
      lenguaje: '',
      estrellas: 0,
      check: false,
    });
    setError(false); 
  };

  const handleConfirm = () => {
    setOpen(false); 
    handleClear(); 
  };

  return (
    <>
      <Box sx={{ padding: '20px' }}>
        {/* nombre apellidos y edad */}
        <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
          <Grid xs={12} sm={4} md={4}>
            <TextField
              fullWidth
              sx={{ marginBottom: '20px' }}
              label="Nombre"
              value={data.nombre}
              onChange={(e) => setData({ ...data, nombre: e.target.value })}
              error={error && !data.nombre}
            />
          </Grid>
          <Grid xs={12} sm={4} md={4}>
            <TextField
              fullWidth
              sx={{ marginBottom: '20px' }}
              label="Apellido"
              value={data.apellido}
              onChange={(e) => setData({ ...data, apellido: e.target.value })}
              error={error && !data.apellido}
            />
          </Grid>
          <Grid xs={12} sm={4} md={4}>
            <TextField
              fullWidth
              sx={{ marginBottom: '20px' }}
              label="Edad"
              value={data.edad}
              type='number'
              onChange={(e) => setData({ ...data, edad: e.target.value })}
              error={error && !data.edad}
            />
          </Grid>
        </Grid>

        {/* Elegir genero y lenguaje de programación */}
        <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
          <Grid xs={12} sm={6} md={4}>
            <FormControl sx={{ marginBottom: '20px' }} error={error && !data.genero}>
              <FormLabel>Género:</FormLabel>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                value={data.genero}
                onChange={(e) => setData({ ...data, genero: e.target.value })}
              >
                <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
                <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={8}>
            <FormControl fullWidth sx={{ marginBottom: '20px' }} error={error && !data.lenguaje}>
              <InputLabel>Lenguaje de programación</InputLabel>
              <Select
                label="Lenguaje de programación"
                value={data.lenguaje}
                onChange={(e) => setData({ ...data, lenguaje: e.target.value })}
              >
                <MenuItem value="Python">Python</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
                <MenuItem value="JavaScript">JavaScript</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Estrella */}
        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          <Grid>
            <Typography component="legend" sx={{ marginBottom: '10px' }}>
              Puntúa esta encuesta
            </Typography>
          </Grid>
          <Grid>
            <Rating
              value={data.estrellas}
              precision={0.5}
              sx={{ marginBottom: '20px' }}
              onChange={(event, newValue) => setData({ ...data, estrellas: newValue })}
            />
          </Grid>
        </Grid>

        {/* Casilla de aceptación */}
        <Grid>
          <FormGroup sx={{ marginBottom: '15px' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.check}
                  onChange={() => setData((prev) => ({ ...prev, check: !prev.check }))}
                />
              }
              label="Acepta esta encuesta"
            />
          </FormGroup>
        </Grid>
        
        {/* Botones de limpiar y borrar */}
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={6}>
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Enviar
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <Button fullWidth variant="outlined" onClick={handleClear}>
              Borrar
            </Button>
          </Grid>
         {/* Mensaje de confirmación */}
        </Grid>
        <Dialog open={open}>
          <DialogTitle>Confirmación</DialogTitle>
          <DialogContent>
            <DialogContentText>¿Estás seguro de enviar esta encuesta?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirm}>Sí</Button>
            <Button onClick={() => setOpen(false)}>No</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default App;
