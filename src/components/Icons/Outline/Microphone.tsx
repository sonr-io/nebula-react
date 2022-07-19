
import Microphone from "../../../assets/outline/Microphone.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicrophoneIcon({ className, dataTestid = "MicrophoneIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Microphone data-testid={dataTestid} className={classes} {...rest} />
  );
}
