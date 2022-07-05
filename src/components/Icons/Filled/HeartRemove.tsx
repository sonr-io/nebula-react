
import HeartRemove from "../../../assets/filled/HeartRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HeartRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartRemove data-testid="HeartRemoveIcon" className={classes} />
  );
}
