
import './Header.css';
import React from 'react';
import IconMenu from '@material-ui/core/IconMenu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/core/SvgIcon/SvgIcon';

const RightMenu = () => {
    <IconMenu
    iconButtonElement={
        <IconButton>
            <MoreVertIcon color={grey50} />
        </IconButton>
    }
}
targetOrigin={{horizontal: 'right', vertical: 'top'}}
targetOrigin={{horizontal: 'right', vertical: 'top'}}
>
<MenuItem primaryText=""/>
<MenuItem primaryText=""/>
<MenuItem primaryText=""/>
</IconMenu>
import { AppBar } from '@material-ui/core';
const Header = () => {

    return <header className='header'>
        <h1>Header</h1>
        
    </header>
}
export const AppHeader = () => {
    return {
        <AppBar
        title="Material UI Приложение!"
        style={{background: indigo700} }
        iconElementRight={<RightMenu />}
        onLeftIconButtonTouchTap={ () => console.log('ckick!')}
        />
    }
}
export default Header;