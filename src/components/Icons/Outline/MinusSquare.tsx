
import MinusSquare from "../../../assets/outline/MinusSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MinusSquare data-testid="MinusSquareIcon" className={classes} />
  );
}
