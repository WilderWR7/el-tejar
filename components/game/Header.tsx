import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './Header.module.css'
export const Header = () => {
    return (
        <Box className={styles.container} >
            <Image
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Escudo_de_Club_Bol%C3%ADvar.svg/1795px-Escudo_de_Club_Bol%C3%ADvar.svg.png'}
                width={100}
                height={100}
            />
            <Typography variant='h2'  >Bolivar</Typography>
            <Typography variant='h2' >VS</Typography>
            <Typography variant='h2' >The Strongest</Typography>
            <Image
                src={'https://upload.wikimedia.org/wikipedia/commons/2/22/Club_the_strongest_escudo_transparent_background_png_700px.png'}
                width={100}
                height={100}
            />
        </Box>
    )
}
