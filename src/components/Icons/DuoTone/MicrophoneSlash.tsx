
import MicrophoneSlash from "../../../assets/duotone/MicrophoneSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicrophoneSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MicrophoneSlash} data-testid="MicrophoneSlashIcon" className={classes} />
  );
}
