import { Box, Button, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import styles from './RegisterPlayerScreen.module.css'
import {useState} from 'react'
import { FileLeftRegister } from './FileLeftRegister'

interface FormData{
  name: string,
  lastName: string,
  ci: string,
  date: string,
  age: string,
  position: string
}

interface img {
  astModified: number,
name: string,
size: number,
type: string
}

export interface files {
  currentTarget: {
    files: img[]
  }
}

export interface images {
  name: string,
  url: string,
  file: img
}

export const RegisterPlayerScreen = () => {
  const {register,handleSubmit,formState:{errors}}= useForm<FormData>();
  const [imgface, setimgface] = useState<images>()
  const [imgCarnet, setimgcarnet] = useState<images>()
  const selectImage = (e:files,value:number = 2)=> {
    const  file:any  = e.currentTarget.files[0]
    const url = URL.createObjectURL(file);
    if(value === 1) {
      setimgface(
        {
          file,
          url,
          name: file.name
        }
      )
    }
    else {
      setimgcarnet(
        {
          file,
          url,
          name: file.name
        }
      )
    }
    }

  const onRegisterForm = ({name,age,ci,date,lastName,position}: FormData) => {
    console.log({name,age,ci,date,lastName,position})
  }

  // console.log(img)
  return (
    <Container maxWidth='xl' >
      <Box display={'flex'} style={{alignItems: 'center',marginTop: '1rem'}} >
        <Image alt='ww' src='https://upload.wikimedia.org/wikipedia/commons/2/22/Club_the_strongest_escudo_transparent_background_png_700px.png' width={60} height={60} />
        <Typography variant='h1'>Club The Strongest</Typography>
      </Box>
      <Box className={styles['register-container']} >
          <FileLeftRegister imgCarnet={imgCarnet} imgface={imgface} selectImage={ selectImage }/>
          <Box className={styles.register} >
            <form onSubmit={handleSubmit(onRegisterForm)} >
              <Typography variant='h2' style={{fontWeight: 'bold'}} >Datos del jugador</Typography>
              <TextField
                  margin='dense'
                  label='Nombre'
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  {...register('name',{
                      required:'Este campo es obligatorio'
                  })}
                  error = {!!errors.name}
                  helperText = {errors.name?.message}
                  autoComplete='none'
                  className={styles.textField}
              />
              <TextField
                  margin='dense'
                  label='Apellidos'
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  {...register('lastName',{
                      required:'Este campo es obligatorio'
                  })}
                  error = {!!errors.name}
                  helperText = {errors.name?.message}
                  autoComplete='none'
                  className={styles.textField}
              />
              <TextField
                  margin='dense'
                  label='Nro Ci'
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  {...register('ci',{
                      required:'Este campo es obligatorio'
                  })}
                  error = {!!errors.name}
                  helperText = {errors.name?.message}
                  autoComplete='none'
                  className={styles.textField}
              />
              
              <TextField
                  margin='dense'
                  type='date'
                  // label='Fecha de nacimiento'
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  {...register('date',{
                      required:'Este campo es obligatorio'
                  })}
                  error = {!!errors.name}
                  helperText = {errors.name?.message}
                  autoComplete='none'
                  className={styles.textField}
              />

              <TextField
                  margin='dense'
                  label='Edad'
                  type={'number'}
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  {...register('age',{
                      required:'Este campo es obligatorio'
                  })}
                  error = {!!errors.name}
                  helperText = {errors.name?.message}
                  autoComplete='none'
                  className={styles.textField}
              />
              <FormControl fullWidth margin='dense' >
                <InputLabel id="demo-simple-select-label">Posición</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...register('position',{
                    required:'Este campo es obligatorio'
                  })}
                  error = {!!errors.name}
                    // value={age}
                  value={10}
                  label="Posición"
                  className={styles.textField}

                    // onChange={handleChange}
                  >
                  <MenuItem value={10}>Portero</MenuItem>
                  <MenuItem value={20}>Defensor</MenuItem>
                  <MenuItem value={30}>Volante</MenuItem>
                  <MenuItem value={40}>Delantero</MenuItem>
                </Select>
              </FormControl>
              <Box className={styles['btn-form']} >
                <Button style={{padding:'0.5rem 1.5rem'}} color='success' type='submit'>
                  Inscribir
                </Button>
              </Box>

            </form>
          </Box>
      </Box>
    </Container>
  )
}

