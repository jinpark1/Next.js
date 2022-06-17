import * as React from 'react';
import MaterialButton from '@mui/material/Button';
import Link from 'next/link'

interface ButtonProps {
  routePath: string;
  startIcon?: JSX.Element;
  text: string;
}

export default function Button(props: ButtonProps) {
  return (
    <Link href={props.routePath}>
      <MaterialButton
        sx={[
          {
            '&:hover': {
              border: 'none',
            }
          },
          {
          m: '10px 0px',
          fontWeight: 'bold',
          border: 'none',
          boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          },
        ]} 
        variant="outlined"
        startIcon={props.startIcon ? props.startIcon : null}
      >
        {props.text}
      </MaterialButton>
    </Link>
  );
}