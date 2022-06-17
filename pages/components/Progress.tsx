import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

interface StatusMap {
  Complete: number;
  InProgress: number;
  Unclaimed: number;
}

const statusMap: StatusMap  = {
  Complete: 3,
  InProgress: 1,
  Unclaimed: 0,
}

interface ProgressProps {
  status: number;
}

export default function Progress(props: ProgressProps) {
  const [statusText, setStatusText] = useState<string | undefined>("");
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);

  useEffect(() => {
    if (props.status === statusMap.InProgress)
      setShowProgressBar(true);
    
    const statusText = Object.keys(statusMap).find(((key: any) => statusMap[key as keyof StatusMap] === props.status));
    setStatusText(statusText);

  }, [props.status])

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <span style={{
        backgroundColor: statusText === "Complete" ? "green"
          : statusText === "InProgress" ? "orange"
          : statusText === "Unclaimed" ? "grey" : "transparent",
        borderRadius: "10px",
        color: "white",
        minWidth: "100px",
        }}
      >
        {statusText}
      </span>
      { showProgressBar && <BorderLinearProgress sx={{ marginTop: "20px" }} variant="determinate" value={50} /> }
    </Box>
  );
}