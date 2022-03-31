//  importing React, The DataGrid from Material-UI and  creating two arrays which will be filled by objects.
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel, } from '@mui/x-data-grid';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material'
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { DroneForm } from '../../components';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Drone name',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
        editable: true,
    },
    {
        field: 'camera_quality',
        headerName: 'Camera Quality',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        description: 'Drone Description',
        sortable: false,
        width: 160

    },
];

// interface gridData {
//     data:{
//         id?:string;
//     }
// }

export function DataTable() {
    let { droneData, getData } = useGetData();
    let [ open, setOpen] = useState(false);
    let [ gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true);
    }
    let handleClose = () => {
        setOpen(false);
    }

    let deleteData = async () =>{
        for (let id in gridData){
            await server_calls.delete( `${gridData[id]}`)
        }
        window.location.reload()
    }
    console.log(gridData)
return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
        rows= {droneData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={ (newSelectionModel) => {setData(newSelectionModel);}}
    />
    <Button onClick={handleOpen}>Update Drone</Button>
    <Button  variant='contained' color='secondary' onClick={deleteData}>Delete Drone</Button>
    {/* Dialog Pop up here */}
    <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Update A Drone</DialogTitle>
        <DialogContent>
            <DialogContentText>Drone id: {gridData[0]}</DialogContentText>
            <DroneForm id={ `${gridData[0]}` }/>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color='primary'>Cancel</Button>
        </DialogActions>
    </Dialog>
    </div>
);
}




