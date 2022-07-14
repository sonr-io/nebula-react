
import RotateRight from "../../../assets/duotone/RotateRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RotateRight} data-testid="RotateRightIcon" className={classes} />
  );
}
