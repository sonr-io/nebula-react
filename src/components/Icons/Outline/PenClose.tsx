
import PenClose from "../../../assets/outline/PenClose.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PenCloseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PenClose data-testid="PenCloseIcon" className={classes} />
  );
}
