
import MicrophoneSlash1 from "../../../assets/filled/MicrophoneSlash1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MicrophoneSlash1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MicrophoneSlash1 data-testid="MicrophoneSlash1Icon" className={classes} />
  );
}
