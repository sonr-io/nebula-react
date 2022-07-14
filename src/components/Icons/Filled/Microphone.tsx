
import Microphone from "../../../assets/filled/Microphone.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicrophoneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Microphone} data-testid="MicrophoneIcon" className={classes} />
  );
}
