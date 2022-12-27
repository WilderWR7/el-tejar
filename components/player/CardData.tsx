import { Box, Typography } from '@mui/material'
import { DirectionsRun } from '@mui/icons-material'
import styles from './CardData.module.css'


export const CardData = () => {
  return (
    <Box className={styles.container} >
        <Box className={styles.container_data} >
            <Typography >Partidos Jugados</Typography>
            <Typography color={'#D9D9D9'} >Cantidad</Typography>
            <Box style={{'display':'flex', alignItems: 'end'}} >
            <Typography fontSize={'3.5rem'} >9</Typography>
            <Box display={'flex'} justifyContent= {'flex-end'} >
                <Typography fontSize={'1rem'} color='#D9D9D9' >/2023</Typography>
            </Box>

            </Box>
        </Box>
        <DirectionsRun style={{fontSize: 80}}/>
    </Box>
  )
}
