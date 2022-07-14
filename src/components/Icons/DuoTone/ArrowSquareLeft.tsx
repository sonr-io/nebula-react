
import ArrowSquareLeft from "../../../assets/duotone/ArrowSquareLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowSquareLeft data-testid="ArrowSquareLeftIcon" className={classes} />
  );
}