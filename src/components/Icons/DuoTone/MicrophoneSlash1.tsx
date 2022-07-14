
import MicrophoneSlash1 from "../../../assets/duotone/MicrophoneSlash1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicrophoneSlash1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MicrophoneSlash1} data-testid="MicrophoneSlash1Icon" className={classes} />
  );
}
