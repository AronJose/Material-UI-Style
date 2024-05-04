import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Typography,
    Card,
    CardContent
} from '@mui/material';

const columns = [
    { field: '', width: 1 },
    { field: 'Name', headerName: 'Name', width: 400 },
    { field: 'Location', headerName: 'Location', width: 400 }
];

const rows = [
    { id: 1, Name: 'Chocolate Factory', Location: 'Charlotte Amalie,USA ' },
    { id: 2, Name: 'Lockheed', Location: 'Bethesda,Maryland,USA' },
    { id: 3, Name: 'Chip Factory', Location: 'Taichung City,Taiwan' },
    { id: 4, Name: 'Lockheed fam', Location: 'Charlotte Amalie,USA ' },
    { id: 5, Name: 'Daenerys Milks', Location: 'Bethesda,Maryland,USA' },
    { id: 6, Name: 'Chip Factory', Location: 'Taichung City,Taiwan' },
    { id: 7, Name: 'Ferrary car Factory', Location: 'Bethesda,Maryland,USA' },
    { id: 8, Name: 'Chocolate Factory', Location: 'Charlotte Amalie,USA ' },
];

export default function ListsBox() {
    return (
        <Card sx={{ height: 415, width: '77%', marginLeft: 33, marginTop: 5 }}>
            <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" sx={{ color: 'grey', marginLeft: 1, height: 50 }}>All Plants </Typography>
                <DataGrid sx={{ width: '100%', height: 365 }}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 4 },
                        },
                    }}
                    pageSizeOptions={[4, 8]}
                    checkboxSelection />
            </CardContent>
        </Card>

    );
}

