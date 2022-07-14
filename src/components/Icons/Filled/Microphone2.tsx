
import Microphone2 from "../../../assets/filled/Microphone2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Microphone2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Microphone2 data-testid="Microphone2Icon" className={classes} />
  );
}
