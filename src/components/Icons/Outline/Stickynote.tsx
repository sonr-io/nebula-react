
import Stickynote from "../../../assets/outline/Stickynote.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StickynoteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Stickynote} data-testid="StickynoteIcon" className={classes} />
  );
}
