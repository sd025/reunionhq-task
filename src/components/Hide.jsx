import { Box, Drawer, FormControlLabel, Button, FormGroup} from '@mui/material';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const Hide = ({ open, table, setShowColumnSideBar}) => {
    const columnsInitialState = {
        id: true,
        name: true,
        category: true,
        subcategory: true,
        createdAt: true,
        updatedAt: true,
        price: true,
        sale_price: true
    }
    const allItems = ['id', 'name', 'category', 'subcategory', 'createdAt', 'updatedAt', 'price', 'sale_price'];
    const [selectedGroups, setSelectedGroups] = useState(columnsInitialState);

    function handleOnClick() {
        setShowColumnSideBar();
    }

    function showAll(){
        setSelectedGroups(columnsInitialState);
        handleColumnVisibility(allItems);
    }
    function handleColumnVisibility(selectedFormGroups){
        const toHide = allItems.filter((x) => {
            if(!selectedFormGroups.includes(x)){
                return x;
            }
        })

        if(toHide.length==0){
            const showColumns = allItems.reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {});
            table.setColumnVisibility(showColumns);
        }
        const hideColumns = toHide.reduce((acc, key) => {
            acc[key] = selectedFormGroups.includes(acc[key]) ? true : false;
            return acc;
          }, {});
        table.setColumnVisibility(hideColumns);
    }

    const handleSubmit = () => {
        // Filter out selected groups
        const selectedFormGroups = Object.keys(selectedGroups).filter(
          (groupName) => selectedGroups[groupName]
        );
        console.log('Selected form groups:', selectedFormGroups);
        // Perform further actions based on the selected form groups
        handleColumnVisibility(selectedFormGroups);
    };

    const toggleSelection = (groupName) => {
        setSelectedGroups((prevSelectedGroups) => ({
          ...prevSelectedGroups,
          [groupName]: !prevSelectedGroups[groupName],
        }));
    };
    return (
      <Drawer anchor="right" open={open}>
        <Box sx={{width: '25vw'}} p={2}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignContent:'center'}}>
                <h2>Show/Hide Columns</h2>
                <CancelIcon onClick={handleOnClick} />
            </Box>
            <Box sx={{width: 'auto', height: 'auto'}}>
                <FormGroup sx={{width:'auto'}}>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0',justifyContent: 'space-between', width: '100%', border:'1px solid gray', padding: 1, marginTop: 2}} control={<Switch onChange={() => toggleSelection('id')}checked={selectedGroups.id}/>} label="ID" labelPlacement='start'/>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0', justifyContent: 'space-between', width: '100%',border:'1px solid gray', padding: 1, marginTop: 2}} control={<Switch onChange={() => toggleSelection('name')} checked={selectedGroups.name}/>} label="Name" labelPlacement='start'/>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0', justifyContent: 'space-between', width: '100%',border:'1px solid gray', padding: 1, marginTop: 2}} control={<Switch onChange={() => toggleSelection('category')} checked={selectedGroups.category}/>} label="Category" labelPlacement='start'/>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0',justifyContent: 'space-between', width: '100%',border:'1px solid gray', padding: 1, marginTop: 2}} control={<Switch onChange={() => toggleSelection('subcategory')} checked={selectedGroups.subcategory}/>} label="Sub Category" labelPlacement='start'/>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0',justifyContent: 'space-between', width: '100%',border:'1px solid gray', padding: 1, marginTop: 2}} control={<Switch onChange={() => toggleSelection('createdAt')} checked={selectedGroups.createdAt}/>} label="Created At" labelPlacement='start'/>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0',justifyContent: 'space-between', width: '100%',border:'1px solid gray', padding: 1, marginTop: 2}} control={<Switch onChange={() => toggleSelection('updatedAt')} checked={selectedGroups.updatedAt}/>} label="Updated At" labelPlacement='start'/>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0',justifyContent: 'space-between', width: '100%',border:'1px solid gray', padding: 1, marginTop: 2}}control={<Switch onChange={() => toggleSelection('price')} checked={selectedGroups.price}/>} label="Price" labelPlacement='start'/>
                    <FormControlLabel sx = {{display: 'flex', marginLeft: '0',justifyContent: 'space-between', width: '100%',border:'1px solid gray', padding: 1, marginTop: 2, marginBottom: 1}}control={<Switch onChange={() => toggleSelection('sale_price')} checked={selectedGroups.sale_price}/>} label="Sale Price" labelPlacement='start'/>
                </FormGroup>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}}>
                <Button sx={{width: '100%', backgroundColor: "white", color:"black", border: "1px solid blue", marginBottom:1}} variant="contained" color="primary" onClick={showAll}>
                    Show All
                </Button>
                <Button sx={{width: '100%'}} variant="contained" color="primary" onClick={handleSubmit}>
                    Apply
                </Button>
            </Box>
        </Box>
      </Drawer>
    );
  };

  export default Hide;