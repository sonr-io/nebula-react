
import RefreshRightSquare from "../../../assets/filled/RefreshRightSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RefreshRightSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RefreshRightSquare data-testid="RefreshRightSquareIcon" className={classes} />
  );
}
