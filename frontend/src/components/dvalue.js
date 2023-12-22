import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DropDowns from './Dropdowns';
import styles from './dvalue.module.css'
function DrawerValue() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
      <center className={styles.filter} >
      Filters 
      <DropDowns setState={setState} />
      </center>
      </List>
      <Divider />
    </Box>
  );
  
  return (
    <>
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
        
            <Button  sx={{ color: "white",fontSize:"20px"}} onClick={toggleDrawer(anchor, true)}>Filters</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

    </>
  )
}

export default DrawerValue;