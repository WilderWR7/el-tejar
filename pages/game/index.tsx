import React from 'react'
import LeftNavBar from '../../components/navBar/LeftNavBar'
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Header } from '../../components/game/Header';
import PlayerTable from '../../components/game/PlayerTable';

const GameScreen = () => {
  return (
    <LeftNavBar>
        <Container>
            <Header/>
            <Typography variant='h1'>Alineaciones</Typography>
            <Box display={'flex'} >
                <PlayerTable/>
                <PlayerTable/>
            </Box>
        </Container>
    </LeftNavBar>
  )
}

export default GameScreen