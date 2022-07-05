
import TickSquare from "../../../assets/filled/TickSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TickSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TickSquare data-testid="TickSquareIcon" className={classes} />
  );
}
