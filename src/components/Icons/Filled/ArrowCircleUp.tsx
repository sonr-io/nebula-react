
import ArrowCircleUp from "../../../assets/filled/ArrowCircleUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowCircleUp data-testid="ArrowCircleUpIcon" className={classes} />
  );
}
