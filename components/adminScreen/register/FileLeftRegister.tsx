import React,{FC, useRef, useState} from 'react'
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import styles from './FileLeftRegister.module.css'
import { files, images } from "./RegisterPlayerScreen";
import Webcam from "react-webcam";
interface Props {
    imgface: images | undefined,
    imgCarnet: images | undefined,
    selectImage: (escritorio?: string, mobile?: files, value?: number,isMobile?:boolean) => void,
    deleteface: ()=> void,
    deleteCarnet: ()=> void
}


export const FileLeftRegister:FC<Props> = ({imgCarnet,imgface,selectImage,deleteface,deleteCarnet}) => {
    const webcamRef:any = useRef(null);
    const capture = ()=> {
        const imageSrc = webcamRef.current.getScreenshot();
        selectImage(imageSrc,undefined,1)
    }
    return (
    <Box className={styles.register}>
        <Typography variant="h2">Fotografia del Jugador</Typography>
        <Box
            style={{
            backgroundColor: "white",
            padding: "1rem",
            border: "2px dashed #BCC0C3",
            }}
        >
            <Box
                style={{
                    maxHeight: "200px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
            {   imgface === undefined && 
                <AccountBoxIcon
                style={{
                    width: "70%",
                    height: "200px",
                    color: "#BCC0C3",
                    margin: "0 auto",
                }}
                className={styles['icon-face']}
                />
            }
            {
                imgface?.url === undefined && 
                <Webcam
                    width={'100%'}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    ref = {webcamRef}
                    className={styles['web-cam']}
                />

            }
            {
                imgface?.url  && 
                <img
                    alt='ww'
                    style={{ maxWidth: "100%", height: "200px" }}
                    src={imgface.url || ''}
                />
            }
            </Box>
            <Box className={styles["btn-container"]}>
                
                {/* { */}
                    {/* isMobile ?  */}
                    <label className={styles.btn}>
                        <Typography>Camara</Typography>
                        <CameraAltIcon style={{ marginLeft: "1rem" }} />
                        <input
                            capture
                            accept="image/*"
                            style={{ display: "none" }}
                            type="file"
                            onChange={(e: any) => selectImage('',e,1,true)}
                            typeof="image"
                        />
                    </label>
                    <Box display={'flex'} justifyContent={'space-around'} width={'100%'} >
                        <Button className={styles['web-cam']} color='success' endIcon={<CameraAltIcon />} onClick={capture}>
                            <Typography>Captura</Typography>
                        </Button>
                        <Button className={styles['web-cam']} color='error' endIcon={<CameraAltIcon />} onClick={deleteface} >
                            <Typography>Elimina</Typography>
                        </Button>
                    </Box>
                {/* } */}
                
                <label className={styles.btn}>
                    <Typography>Archivo</Typography>
                    <CloudUploadIcon style={{ marginLeft: "1rem" }} />
                    <input
                        accept="image/*"
                        style={{ display: "none" }}
                        type="file"
                        onChange={(e: any) => selectImage('',e,1,true)}
                        typeof="image"
                    />
                </label>
            </Box>
        </Box>
        <Typography variant="h2">Carnet de Identidad</Typography>
        <Box
            style={{
            backgroundColor: "white",
            padding: "1rem",
            border: "2px dashed #BCC0C3",
            }}
        >
            <Box
                style={{
                    maxHeight: "200px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {imgCarnet === undefined ? (
                <ContactEmergencyIcon
                    style={{
                    width: "70%",
                    height: "200px",
                    color: "#BCC0C3",
                    display: "block",
                    margin: "0 auto",
                    }}
                />) : (
                <img
                    alt='ww'
                    style={{ maxWidth: "100%", height: "200px" }}
                    src={imgCarnet.url}
                />
                )}
            </Box>
            <Box className={styles["btn-container"]}>
                <label className={styles.btn1}>
                    <Typography>Camara</Typography>
                    <CameraAltIcon style={{ marginLeft: "1rem" }} />
                    <input
                        capture
                        accept="image/*"
                        style={{ display: "none" }}
                        type="file"
                        onChange={(e: any) => selectImage('',e,2,true)}
                        typeof="image"
                    />
                </label>
                <label className={styles.btn1}>
                    <Typography>Archivo</Typography>
                    <CloudUploadIcon style={{ marginLeft: "1rem" }} />
                    <input
                    accept="image/*"
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e: any) => selectImage('',e,2,true)}
                    typeof="image"
                    />
                </label>
            </Box>
        </Box>
    </Box>
);
};
