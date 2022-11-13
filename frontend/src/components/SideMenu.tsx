import React from 'react';

interface SideMenuProps {
    classes: ReturnType<any>;
  }
  

export const SideMenu: React.FC<SideMenuProps> = ({ classes}: SideMenuProps): React.ReactElement => {
  return (
    <div>
      Side Menu
    </div>
  );
}
