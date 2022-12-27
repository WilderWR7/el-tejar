import { Box, Typography } from "@mui/material"
import Image from "next/image"

export const PlayerData = () => {
  return (
    <Box style={{display: 'flex', flexDirection: 'column', padding: '2rem', rowGap: '1rem'}}>
        <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Image style={{borderRadius: '50%'}}  src={'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG'}  width={100} height={100} />
        </Box>
        <Typography  style={{fontWeight: 'bold', textAlign: 'center'}} >Wilder Mayta</Typography>
        <Box style={{display: 'flex'}} >
            <Typography style={{color:'#BDBDBD', fontWeight: 'bold'}}>Genero</Typography>
            <Box style={{flex:1}} />
            <Typography fontWeight={'bold'} >Masculino</Typography>
        </Box>
        <Box style={{display: 'flex'}} >
            <Typography style={{color:'#BDBDBD', fontWeight: 'bold'}}>Fec. Nac.</Typography>
            <Box style={{flex:1}} />
            <Typography fontWeight={'bold'} >07/01/1999</Typography>
        </Box>
        <Box style={{display: 'flex'}} >
            <Typography style={{color:'#BDBDBD', fontWeight: 'bold'}}>Edad</Typography>
            <Box style={{flex:1}} />
            <Typography fontWeight={'bold'} >23</Typography>
        </Box>
        <Box style={{display: 'flex'}} >
            <Typography style={{color:'#BDBDBD', fontWeight: 'bold'}}>C. I.</Typography>
            <Box style={{flex:1}} />
            <Typography fontWeight={'bold'} >1234567</Typography>
        </Box>
        <Box style={{display: 'flex'}} >
            <Typography style={{color:'#BDBDBD', fontWeight: 'bold'}}>Nacionalidad</Typography>
            <Box style={{flex:1}} />
            <Typography fontWeight={'bold'} >Bolivia</Typography>
        </Box>
        <Box style={{display: 'flex'}} >
            <Typography style={{color:'#BDBDBD', fontWeight: 'bold'}}>Ciudad</Typography>
            <Box style={{flex:1}} />
            <Typography fontWeight={'bold'} >La Paz</Typography>
        </Box>
        <Box style={{display: 'flex'}} >
            <Typography style={{color:'#BDBDBD', fontWeight: 'bold'}}>Posicion</Typography>
            <Box style={{flex:1}} />
            <Typography fontWeight={'bold'} >DC</Typography>
        </Box>
        
    </Box>    
  )
}
