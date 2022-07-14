
import KeySquare from "../../../assets/outline/KeySquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeySquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={KeySquare} data-testid="KeySquareIcon" className={classes} />
  );
}
