import { Box, Typography } from '@mui/material'
import styles from './InformationPlayer.module.css'
import { CardData } from './CardData'
import { PlayerData } from './PlayerData'
export const InformationPlayer = () => {
  return (
    <Box style={{display: 'flex', flexDirection: 'column',rowGap: '1.2rem'}} >
        <Box className={styles.container} >
            <Box className={styles.infoJugador} >
                <PlayerData/>
            </Box>
            <Box display='flex' flexDirection={'column'}  rowGap={'1.2rem'}>
                <Box className={styles.grid2} >
                    <CardData/>
                    <CardData/>
                    <CardData/>
                    <CardData/>
                </Box>
                <Box className={styles.grid3} >
                    <CardData/>
                    <CardData/>
                    <CardData/>
                </Box>
            </Box>
        </Box>
        <Box className={styles.grid3} >
            <CardData/>
            <CardData/>
            <CardData/>
        </Box>
    </Box>
  )
}
