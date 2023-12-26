import { AttachmentOutlined, Download } from '@mui/icons-material';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';
import React, { useState } from 'react'
import { AttachmentListStyle } from '../AgenDetailDescStyles';
import useGetData from '../../../hooks/useGetData';

export const Attachment = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {getData, isLoading: getLoading, error: getError, setError: setGetError } = useGetData();

  const handleDownload = (fileName) => {
    getData(
        `https://localhost:44366/api/Agen/DownloadAttachment?fileName=${fileName}`,
        'downloadAttachment',
        fileName
    )
}

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
        <MenuList sx={{padding:0, display:'flex', flexDirection:'column', alignItems:'center'}}>
            { data.attachments && data?.attachments.map((attachment) => {
            return (
                <Button key={`attachment-${attachment.id}`} sx={{padding:0}} onClick={()=>handleDownload(attachment.fileName)}
                disabled={getLoading}>
                <MenuItem  sx={AttachmentListStyle}>
                    <ListItemText>{attachment.fileName}</ListItemText>
                    <ListItemIcon sx={{justifyContent: 'end'}}>
                        <Download fontSize="small" />
                    </ListItemIcon>
                </MenuItem>
                </Button>
            )})}
        </MenuList>
      </Menu>
    </div>
  )
}
