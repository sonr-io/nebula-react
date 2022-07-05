
import AddSquare from "../../../assets/duotone/AddSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AddSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AddSquare data-testid="AddSquareIcon" className={classes} />
  );
}
