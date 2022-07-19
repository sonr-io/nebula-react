
import MicrophoneSlash1 from "../../../assets/duotone/MicrophoneSlash1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicrophoneSlash1Icon({ className, dataTestid = "MicrophoneSlash1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MicrophoneSlash1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
