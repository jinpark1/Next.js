import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

interface TextFieldProps {
  placeholder: string;
  ariaLabel: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export default function TextField(props: TextFieldProps) {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        m: '10px 10px',
        display: 'flex',
        alignItems: 'center',
        width: 300
      }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': props.ariaLabel }}
        onChange={ (e) =>props.onChange(e) }
      />
    </Paper>
  );
}
