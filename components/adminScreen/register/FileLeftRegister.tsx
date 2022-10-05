import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import styles from './FileLeftRegister.module.css'
import {FC} from 'react'
import { files, images } from "./RegisterPlayerScreen";

interface Props {
    imgface: images | undefined,
    imgCarnet: images | undefined,
    selectImage: (e: files, value?:number) => void
}


export const FileLeftRegister:FC<Props> = ({imgCarnet,imgface,selectImage}) => {
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
            {imgface === undefined ? (
                <AccountBoxIcon
                    style={{
                    width: "70%",
                    height: "200px",
                    color: "#BCC0C3",
                    display: "block",
                    margin: "0 auto",
                }}
                />) : (
                <img
                    style={{ maxWidth: "100%", height: "200px" }}
                    src={imgface.url}
                />
            )}
            </Box>
            <Box className={styles["btn-container"]}>
                <label className={styles.btn}>
                    <Typography>Camara</Typography>
                    <CameraAltIcon style={{ marginLeft: "1rem" }} />
                    <input
                        capture
                        accept="image/*"
                        style={{ display: "none" }}
                        type="file"
                        onChange={(e: any) => selectImage(e,1)}
                        typeof="image"
                    />
                </label>
                <label className={styles.btn}>
                    <Typography>Archivo</Typography>
                    <CloudUploadIcon style={{ marginLeft: "1rem" }} />
                    <input
                    accept="image/*"
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e: any) => selectImage(e)}
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
                    style={{ maxWidth: "100%", height: "200px" }}
                    src={imgCarnet.url}
                />
                )}
            </Box>
            <Box className={styles["btn-container"]}>
                <label className={styles.btn}>
                    <Typography>Camara</Typography>
                    <CameraAltIcon style={{ marginLeft: "1rem" }} />
                    <input
                        capture
                        accept="image/*"
                        style={{ display: "none" }}
                        type="file"
                        onChange={(e: any) => selectImage(e)}
                        typeof="image"
                    />
                </label>
                <label className={styles.btn}>
                    <Typography>Archivo</Typography>
                    <CloudUploadIcon style={{ marginLeft: "1rem" }} />
                    <input
                    accept="image/*"
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e: any) => selectImage(e)}
                    typeof="image"
                    />
                </label>
            </Box>
        </Box>
    </Box>
);
};
