import { Box, Button, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import styles from './RegisterPlayerScreen.module.css'
import {useState} from 'react'
import { FileLeftRegister } from './FileLeftRegister'
import {createWorker} from 'tesseract.js';
import { isMobile } from 'react-device-detect';


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
  url?: string,
  file?: img
}

export const RegisterPlayerScreen = () => {
  const {register,handleSubmit,formState:{errors}}= useForm<FormData>();
  const [imgface, setimgface] = useState<images>()
  const [imgCarnet, setimgcarnet] = useState<images>()
  const selectImage = (escritorio?: string,mobile?:files,value:number = 2,isMobile:boolean = false)=> {
    if(isMobile) {
      const  file:any  = mobile!.currentTarget.files[0]
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
    else {
      setimgface({
        file: undefined,
        url: escritorio!,
        name: 'nmae'
      }) 
    }
    }

  const deleteface =()=> {
    setimgface({
      name:'',
      url: undefined,
      file: undefined
    })
  }

  const deleteCarnet =()=> {
    setimgcarnet({
      name:'',
      url: undefined,
      file: undefined
    })
  }

  const onRegisterForm = ({name,age,ci,date,lastName,position}: FormData) => {
    console.log({name,age,ci,date,lastName,position})
  }

  const verificar = ()=> {
    const worker = createWorker();
    
    (async () => {
      await worker.load();
      await worker.loadLanguage('spa');
      await worker.initialize('spa');
      const { data: { text } } = await worker.recognize(imgCarnet?.url || '');
      console.log(text);
      await worker.terminate();
    })();
  }

  // console.log(img)
  return (
    <Container maxWidth='xl' >
      <Box display={'flex'} style={{alignItems: 'center',marginTop: '1rem'}} >
        <Image alt='ww' src='https://upload.wikimedia.org/wikipedia/commons/2/22/Club_the_strongest_escudo_transparent_background_png_700px.png' width={60} height={60} />
        <Typography variant='h1'>Club The Strongest</Typography>
      </Box>
      <Box className={styles['register-container']} >
          <FileLeftRegister imgCarnet={imgCarnet} imgface={imgface} selectImage={ selectImage } deleteCarnet={deleteCarnet} deleteface={deleteface}/>
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
                <InputLabel id="demo-simple-select-label">Posici??n</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...register('position',{
                    required:'Este campo es obligatorio'
                  })}
                  error = {!!errors.name}
                    // value={age}
                  value={10}
                  label="Posici??n"
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
            
                <Button style={{padding:'0.5rem 1.5rem'}} color='success' onClick={verificar}>
                    Probar
                  </Button>
              </Box>
            </form>
          </Box>
      </Box>
    </Container>
  )
}

