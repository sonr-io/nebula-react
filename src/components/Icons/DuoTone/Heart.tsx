
import Heart from "../../../assets/duotone/Heart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Heart} data-testid="HeartIcon" className={classes} />
  );
}
