
import Microphone from "../../../assets/duotone/Microphone.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MicrophoneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Microphone data-testid="MicrophoneIcon" className={classes} />
  );
}
