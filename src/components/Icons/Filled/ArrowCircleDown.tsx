
import ArrowCircleDown from "../../../assets/filled/ArrowCircleDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowCircleDown data-testid="ArrowCircleDownIcon" className={classes} />
  );
}
