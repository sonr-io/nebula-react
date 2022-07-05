
import ArrowSquareDown from "../../../assets/outline/ArrowSquareDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowSquareDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowSquareDown data-testid="ArrowSquareDownIcon" className={classes} />
  );
}
