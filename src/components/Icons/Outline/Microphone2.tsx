
import Microphone2 from "../../../assets/outline/Microphone2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Microphone2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Microphone2} data-testid="Microphone2Icon" className={classes} />
  );
}
