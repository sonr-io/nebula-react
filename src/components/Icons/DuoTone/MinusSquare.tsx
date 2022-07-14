
import MinusSquare from "../../../assets/duotone/MinusSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MinusSquare} data-testid="MinusSquareIcon" className={classes} />
  );
}
