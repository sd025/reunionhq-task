import { Box, Drawer, Button, IconButton} from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const Sorting = ({columns = [], table, open, setShowSort}) => {

const [sortOrder, setSortOrder] = useState({desc : false});

    function handleSorting(columnName) {
        setSortOrder((prevState) => ({ desc: !prevState.desc }))
        table.setSorting([{
            id: columnName,
            ...sortOrder
        }])
    }


    function toggleBar(){
        setShowSort();
    }

    function resetTableSorting(){
        table.setSorting([]);
    }

    console.log('Columns:', columns); // Log the columns data

    
    return (
        <Drawer anchor="right" open={open} onClose={toggleBar}>
            <Box sx={{width: '25vw'}} p={2}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignContent:'center'}}>
                <h2>Sorting Options</h2>
                <CancelIcon onClick={toggleBar}/>
            </Box>
            <Box sx={{width: 'auto', height: 'auto', display: 'flex', flexDirection:'column'}}>
                {columns.map((column) => {
                    return <Box key={column.accessorKey} sx={{width: '100%', height: '10%', border:'1px solid gray', padding: 1, marginTop: 2 ,display:'flex', alignItems:'center'}}
                                onClick={() => handleSorting(column.accessorKey)}>
                                <p>{column.header}</p>
                                <IconButton>
                                    <SwapVertIcon/>
                                </IconButton>
                            </Box>
                    })
                }
                
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}}>
                <Button sx={{width: '100%', backgroundColor: "white", color:"black", border: "1px solid blue", marginBottom:1, marginTop:4}} variant="contained" color="primary"
                    onClick={() => resetTableSorting()}>
                    Clear Sort
                </Button>
            </Box>
        </Box>
        </Drawer>
    )
}
export default Sorting;