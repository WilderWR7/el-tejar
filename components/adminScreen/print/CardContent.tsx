import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './CardContent.module.css'
export const CardContent = () => {
  return (
    <Box padding={2} style={{position: 'relative'}} >
        <Box className={styles.header} >
            <Box className={styles.title} >
                <Typography variant='subtitle1' className={styles['header-title']}>Liga Deportiva &apos;El Tejar&apos;</Typography>
                <Typography variant='subtitle1'className={styles['header-lastTitle']} >Campeonato oficial de fútbol</Typography>
            </Box>
            <Box className={styles['header-img-container']}>
              <Image alt='wilder' src='/img/escudo.png' width={85} height={85}  />
            </Box>
        </Box> 
        <Box className={styles['container-face']} >
          <Box display={'flex'} flexDirection='column' width={125} >
            <Box className={styles['face']} >
              <Image alt='wilder' src='/img/person.png' width={125} height={125}  />
            </Box>
            <Typography variant='subtitle1' className={styles['face-txt-category']}>PRIMERAS DE HONOR</Typography>
          </Box>
          <Box>
            <Typography variant='subtitle1' className={styles['face-txt-name']}>Wilder Mayta</Typography>
            <Typography variant='subtitle1' className={styles['face-txt']}>Delantero</Typography>
            <Typography variant='subtitle1' className={styles['face-txt']}>The Strongest</Typography>
          </Box>
        </Box>
        <Box style={{display: 'flex',gap:'15px', position:'relative',top:'-5px'}} >
          <Box>
            <Typography className={styles.data}  style={{fontWeight: 'bold'}} variant='subtitle1'>Nro C.I.</Typography>
            <Typography className={styles.data} variant='subtitle1'>9909707 LP</Typography>
            <Typography className={styles.data}  style={{fontWeight: 'bold'}} variant='subtitle1'>F. Nacimiento</Typography>
            <Typography className={styles.data} variant='subtitle1'>01/07/1999</Typography>
          </Box>
          <Box>
            <Typography className={styles.data}  style={{fontWeight: 'bold'}} variant='subtitle1'>Nombres</Typography>
            <Typography className={styles.data} variant='subtitle1'>Wilder Rony</Typography>
            <Typography className={styles.data}  style={{fontWeight: 'bold'}} variant='subtitle1'>Apellidos</Typography>
            <Typography className={styles.data} variant='subtitle1'>Mayta Machicado</Typography>
          </Box>
          <Box>
            <Typography className={styles.data}  style={{fontWeight: 'bold'}} variant='subtitle1'>Edad</Typography>
            <Typography className={styles.data} variant='subtitle1'>23 años</Typography>
            <Typography className={styles.data}  style={{fontWeight: 'bold'}} variant='subtitle1'>F. Habilitacion</Typography>
            <Typography className={styles.data} variant='subtitle1'>07/10/2022</Typography>
          </Box>

        </Box>
        <Box className={styles.qr} >
          <Image alt='wilder' src='/img/qr.png' width={100} height={100}/>
          <Typography variant='subtitle1' textAlign='center'>Codigo Qr</Typography>
        </Box>
    </Box>
  )
}
