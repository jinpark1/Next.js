import { useEffect, useState } from 'react';

interface TextProps {
  format?: string;
  text: string;
  style?: object;
}

export default function ReadOnlyText(props: TextProps) {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (props.format)
      setText(parseInt(props.text).toLocaleString(props.format) + "원");
  }, [props])
  
  return (
    <span style={props.style}>{text ? text : props.text}</span>
  );
}
