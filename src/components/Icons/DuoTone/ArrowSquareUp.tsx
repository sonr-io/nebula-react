
import ArrowSquareUp from "../../../assets/duotone/ArrowSquareUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowSquareUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowSquareUp data-testid="ArrowSquareUpIcon" className={classes} />
  );
}
