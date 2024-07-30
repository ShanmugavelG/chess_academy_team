import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const columns = [
  { field: 'rank', headerName: 'Rank', width: 120 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'score', headerName: 'Score', type: 'number', width: 150 },
];

// Sample data and ranking logic
const rows = [
  { id: 1, name: 'a', score: 85 },
  { id: 2, name: 'aa', score: 95 },
  { id: 3, name: 'bb', score: 90 },
  { id: 4, name: 'b', score: 70 },
  { id: 5, name: 'c', score: 75 },
  { id: 6, name: 'ads', score: 100 },
  { id: 7, name: 'ds', score: 65 },
  { id: 8, name: 'sadwq', score: 60 },
  { id: 9, name: 'asdw', score: 55 },
].map((row, index) => ({ ...row, rank: index + 1 })) // Rank calculation

export default function Leaderboard() {
  return (
    <Box
      sx={{
        height: '80.8vh',
        width: '96vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Leaderboard
      </Typography>
      <Box sx={{ height: 600, width: '40%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
        />
      </Box>
    </Box>
  );
}
