import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PencilIcon from '../assets/pencil-icon.png';
import TextIcon from '../assets/text-tool-icon.png';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Draw" icon={<img src={PencilIcon} alt="Pencil" style={{ width: 24, height: 24 }} />} />
        <BottomNavigationAction label="Text" icon={<img src={TextIcon} alt="Text" style={{ width: 24, height: 24 }}/>} />
      </BottomNavigation>
    </Box>
  );
}