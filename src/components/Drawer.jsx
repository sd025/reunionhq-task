import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { DialogTitle, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColumnHideShow from './Hide';
import SortColumn from './Sort';
import CreateGroups from './Groups';



const AnchorTemporaryDrawer = ({ isOpen, onClose,  drawerContent, btnType, setColHeaderGroup }) => {
  const [open, setOpen] = useState(isOpen);


  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const list = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
    >
      <Box 
      sx={{margin:'2px', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}
      >
      <DialogTitle variant="subtitle1" id="customized-dialog-title"
      // sx={}
      >
        {btnType == 'showHideColsBtn' && <span>Show/Hide Columns</span>}
        {btnType == 'sortColsBtn' && <span>Sorting Options</span> }
        {btnType == 'filterColsBtn' && <span>Filter</span> }
        {btnType == 'createGroupsBtn' && <span>Create Groups</span> }

      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => {
          setOpen(false);
          onClose();
        }}
        sx={{
          width:'45px',
          height: '45px'
        }}
      >
        <CloseRoundedIcon />
      </IconButton>
      </Box>
      <List
      sx={{
        margin: '10px'
      }}
      >
      {btnType === 'showHideColsBtn' && <ColumnHideShow table={drawerContent}/>}
      {btnType === 'sortColsBtn' && <SortColumn  table={drawerContent}/>}
      {btnType === 'filterColsBtn' && <SortColumn  table={drawerContent} />}
      {btnType === 'createGroupsBtn' && <CreateGroups  table={drawerContent} setColHeaderGroup={setColHeaderGroup} />}
      
      
      
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        setOpen(false)
        onClose()
      }}
    >
      {list}
    </Drawer>
  );
}

export default AnchorTemporaryDrawer;
