import { Typography, Container, Input, TextField, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import LeftNavBar from '../../components/navBar/LeftNavBar'
import { SearchOutlined } from "@mui/icons-material"
import { CardPlayer } from '../../components/searchplayerScreen/CardPlayer';

export interface playerdata {
    img: string,
    name: string,
    lastname:string,
    age: number,
    position: string,
    team: string
}


const player:playerdata[] =[
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    },
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    },
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    },
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
    ,
    {
        img: 'https://surveymonkey-assets.s3.amazonaws.com/survey/131949178/image_choice/94286687-35bc-49ef-a137-45213407e56b.PNG',
        name: 'Wilder',
        lastname:'Mayta',
        age: 23,
        position: 'MC',
        team: 'The Strongest'
        
    }
]
const SearchPlayer = () => {
  return (
    <LeftNavBar>
        <Container style={{display: 'flex', flexDirection: 'column', rowGap: '2rem'}}>
        <Box style={{display: 'flex',justifyContent: 'space-between',marginTop: '2rem'}} >
            <Typography variant='h1' >
                Jugadores
            </Typography>
            <TextField placeholder='Buscar Jugador' InputProps={{
                endAdornment:(
                    <InputAdornment position='end' >
                        <SearchOutlined/>
                    </InputAdornment>

                )
            }} />
        </Box>
        <Box style={{display:'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',columnGap: '2rem',rowGap: '2rem'}} >
            {
                player.map(player=> 
                    <CardPlayer {...player} key={player.name} />
                    )

            }
        </Box>

        </Container>
    </LeftNavBar>
  )
}

export default SearchPlayer