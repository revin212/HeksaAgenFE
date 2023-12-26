import { AttachmentOutlined, Cloud, ContentCopy, ContentCut, ContentPaste, Download } from '@mui/icons-material';
import { Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Typography } from '@mui/material';
import React, { useState } from 'react'
import { AttachmentListStyle, agen } from '../AgenDetailDescStyles';

export const Attachment = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AttachmentOutlined sx={{mr:'8px'}} />
        Attachments
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList>
            { agen.attachments.map((attachment) => {
            return (
                <MenuItem key={`attachment-${attachment.id}`} sx={AttachmentListStyle}>
                    <ListItemText>{attachment.fileName}</ListItemText>
                    <ListItemIcon sx={{justifyContent: 'end'}}>
                        <Download fontSize="small" />
                    </ListItemIcon>
                </MenuItem>
            )})}
        </MenuList>
      </Menu>
    </div>
  )
}
