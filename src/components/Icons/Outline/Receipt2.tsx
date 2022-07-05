
import Receipt2 from "../../../assets/outline/Receipt2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Receipt2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Receipt2 data-testid="Receipt2Icon" className={classes} />
  );
}
