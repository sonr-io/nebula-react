
import HeartRemove from "../../../assets/duotone/HeartRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HeartRemove} data-testid="HeartRemoveIcon" className={classes} />
  );
}
