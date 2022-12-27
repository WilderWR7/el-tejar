import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';

interface createData {
    img: string,
    name: string,
    lastname: string,
    nro: number,
    presente: boolean,
    Banca: boolean,
    Portero: boolean,
    Capitan: boolean,
}


const rows:createData[] = [
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Club_the_strongest_escudo_transparent_background_png_700px.png',
        name:'Wilder',
        lastname:'Mayta',
        Banca: true,
        Capitan: true,
        nro: 3,
        Portero: true,
        presente: true
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Club_the_strongest_escudo_transparent_background_png_700px.png',
        name:'Rosa',
        lastname:'Mayta',
        Banca: true,
        Capitan: true,
        nro: 3,
        Portero: true,
        presente: true
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Club_the_strongest_escudo_transparent_background_png_700px.png',
        name:'Evanyelin',
        lastname:'Mayta',
        Banca: true,
        Capitan: true,
        nro: 3,
        Portero: true,
        presente: true
    }
  ];





type Order = 'asc' | 'desc';



// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)

interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'img',
        numeric: false,
        disablePadding: false,
        label: 'foto',
    },
    {
        id: 'Num.',
        numeric: true,
        disablePadding: false,
        label: 'Num.',
    },
    {
        id: 'Nombres',
        numeric: true,
        disablePadding: true,
        label: 'Nombres',
    },
    {
        id: 'E',
        numeric: true,
        disablePadding: false,
        label: 'E',
    },
    {
        id: 'B',
        numeric: true,
        disablePadding: false,
        label: 'B',
    },
    {
        id: 'P',
        numeric: true,
        disablePadding: false,
        label: 'P',
    },
    {
        id: 'C',
        numeric: true,
        disablePadding: false,
        label: 'C',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;

    return (
        <TableHead>
            <TableRow>
                {/* <TableCell padding="checkbox"> */}
                    {/* <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    /> */}
                {/* </TableCell> */}
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        style={{display: 'inline'}}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function PlayerTable() {

    const [selected, setSelected] = React.useState<readonly string[]>([]);

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    // const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    //     const selectedIndex = selected.indexOf(name);
    //     let newSelected: readonly string[] = [];

    //     if (selectedIndex === -1) {
    //         newSelected = newSelected.concat(selected, name);
    //     } else if (selectedIndex === 0) {
    //         newSelected = newSelected.concat(selected.slice(1));
    //     } else if (selectedIndex === selected.length - 1) {
    //         newSelected = newSelected.concat(selected.slice(0, -1));
    //     } else if (selectedIndex > 0) {
    //         newSelected = newSelected.concat(
    //             selected.slice(0, selectedIndex),
    //             selected.slice(selectedIndex + 1),
    //         );
    //     }

    //     setSelected(newSelected);
    // };


    // Avoid a layout jump when reaching the last page with empty rows.


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={'asc'}
                            orderBy={'Num.'}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={()=>{}}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows.map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            // onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            // aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            // selected={isItemSelected}
                                            
                                        >
                                            <TableCell align="left" height={1} >
                                                <Image src={row.img} layout='fixed' width={50} height={50} />
                                            </TableCell>
                                            <TableCell align="right">{row.nro}</TableCell>
                                            <TableCell align="right">{row.name}</TableCell>

                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={row.presente}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={row.Banca}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={row.Portero}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={row.Capitan}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}