
import GridEdit from "../../../assets/outline/GridEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GridEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GridEdit data-testid="GridEditIcon" className={classes} />
  );
}
