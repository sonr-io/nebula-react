
import ArrowLeft from "../../../assets/outline/ArrowLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowLeft} data-testid="ArrowLeftIcon" className={classes} />
  );
}
