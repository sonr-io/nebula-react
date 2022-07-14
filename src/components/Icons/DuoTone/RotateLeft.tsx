
import RotateLeft from "../../../assets/duotone/RotateLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RotateLeft} data-testid="RotateLeftIcon" className={classes} />
  );
}
