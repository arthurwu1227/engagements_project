import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PencilIcon from '../assets/pencil-icon.png';
import TextIcon from '../assets/text-tool-icon.png';
import CloseIcon from '../assets/close-icon.png';

export default function SimpleBottomNavigation({setDrawMode, setTextMode}) {
  const [value, setValue] = React.useState(0);

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setDrawMode(true);
        setTextMode(false);
        break;
      case 1:
        setDrawMode(false);
        setTextMode(true);
        break;
      case 2:
        setDrawMode(false);
        setTextMode(false);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigationChange}
      >
        <BottomNavigationAction label="Draw" icon={<img src={PencilIcon} alt="Pencil" style={{ width: 24, height: 24 }} />} />
        <BottomNavigationAction label="Text" icon={<img src={TextIcon} alt="Text" style={{ width: 24, height: 24 }} />} />
        <BottomNavigationAction label="Cancel" icon={<img src={CloseIcon} alt="Close" style={{ width: 24, height: 24 }} />} />
      </BottomNavigation>
    </Box>
  );
}
