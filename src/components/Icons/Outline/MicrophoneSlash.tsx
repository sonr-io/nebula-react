
import MicrophoneSlash from "../../../assets/outline/MicrophoneSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicrophoneSlashIcon({ className, dataTestid = "MicrophoneSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MicrophoneSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
