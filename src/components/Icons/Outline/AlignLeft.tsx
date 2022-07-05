
import AlignLeft from "../../../assets/outline/AlignLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AlignLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignLeft data-testid="AlignLeftIcon" className={classes} />
  );
}
