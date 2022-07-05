
import ArrowLeft from "../../../assets/duotone/ArrowLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowLeft data-testid="ArrowLeftIcon" className={classes} />
  );
}
