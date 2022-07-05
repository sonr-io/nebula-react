
import Microphone2 from "../../../assets/outline/Microphone2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Microphone2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Microphone2 data-testid="Microphone2Icon" className={classes} />
  );
}
