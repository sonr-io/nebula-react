
import ArrowCircleLeft from "../../../assets/duotone/ArrowCircleLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowCircleLeft} data-testid="ArrowCircleLeftIcon" className={classes} />
  );
}
