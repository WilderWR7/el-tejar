import { Box } from '@mui/material';
import { CardContent } from './CardContent';
import styles from './CardsPrint.module.css'
export const CardsPrint = () => {
  return (
    <Box className={styles.container} >
        <Box className={styles.card}>
            <CardContent/>
        </Box>
        <Box className={styles.card}><CardContent/></Box>
        <Box className={styles.card}><CardContent/></Box>
        <Box className={styles.card}><CardContent/></Box>
        <Box className={styles.card}><CardContent/></Box>
        <Box className={styles.card}><CardContent/></Box>
    </Box>
  )
}
