
import MoreSquare from "../../../assets/outline/MoreSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoreSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoreSquare data-testid="MoreSquareIcon" className={classes} />
  );
}
