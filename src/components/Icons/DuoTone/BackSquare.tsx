
import BackSquare from "../../../assets/duotone/BackSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BackSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BackSquare} data-testid="BackSquareIcon" className={classes} />
  );
}
