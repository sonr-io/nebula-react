
import RefreshRightSquare from "../../../assets/duotone/RefreshRightSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshRightSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RefreshRightSquare} data-testid="RefreshRightSquareIcon" className={classes} />
  );
}
