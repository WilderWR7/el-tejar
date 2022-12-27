import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { playerdata } from '../../pages/searchplayer'
import styles from './CardPlayer.module.css'



export const CardPlayer = ({img,age,lastname,name,position,team}:playerdata) => {
  return (
    <Link href={`/player/${name}`}  >
      <Box className={styles.card}>
          <Box className={styles.img_container} >
            <Image className={styles.card_img} src={img} width={100} height={100}/>
          </Box>
          <Typography  style={{fontWeight: 'bold'}} >{`${name} ${lastname} `} </Typography>
          <Typography style={{color: '#D9D9D9' }} >{`${age} años, ${position}`} </Typography>
          <Button style={{backgroundColor: '#D3EBCD',color: '#045044'}} variant='contained'>{team}</Button>
      </Box>
    </Link>
  )
}
