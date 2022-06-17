import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ThumbnailProps {
  src: string;
  alt: string;
  href: string;
  duration: string;
}

export default function Thumbnail(props: ThumbnailProps) {
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    const duration: number = parseInt(props.duration);
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    setDuration(hours + ":" + minutes);
  }, [props.duration])
  
  return (
    <a style={{ textDecoration: "none", position: "relative", minWidth: "150px", height: "75px" }} href={props.href} target="_blank" rel="noreferrer">
      <Image src={props.src} alt={props.alt} layout="fill" style={{ borderRadius: "10px" }} />
      <span style={{
        position: "absolute",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        color: "white",
        top: "57px",
        right: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        paddingRight: "10px",
        textAlign: "right",
        fontSize:  "12px",
        }}
      >
        {duration}
      </span>
    </a>
  );
}