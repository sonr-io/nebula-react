
import RowHorizontal from "../../../assets/duotone/RowHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RowHorizontalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RowHorizontal data-testid="RowHorizontalIcon" className={classes} />
  );
}
