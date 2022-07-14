
import AddSquare from "../../../assets/duotone/AddSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AddSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={AddSquare} data-testid="AddSquareIcon" className={classes} />
  );
}
