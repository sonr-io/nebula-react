
import MicrophoneSlash from "../../../assets/outline/MicrophoneSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MicrophoneSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MicrophoneSlash data-testid="MicrophoneSlashIcon" className={classes} />
  );
}
