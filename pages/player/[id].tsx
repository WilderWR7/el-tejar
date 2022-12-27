import { useRouter } from 'next/router'
import React from 'react'
import LeftNavBar from '../../components/navBar/LeftNavBar'
import { Container, Typography } from '@mui/material';
import { InformationPlayer } from '../../components/player/InformationPlayer';

const PlayerScreen = () => {
    const router =useRouter()
    const {id} = router.query
    return (
        <LeftNavBar>
            <Container>
                <Typography variant='h1' fontWeight='bold' margin={'1rem 0'}>Jugador</Typography>
                <InformationPlayer/>
            </Container>
        </LeftNavBar>
  )
}

export default PlayerScreen