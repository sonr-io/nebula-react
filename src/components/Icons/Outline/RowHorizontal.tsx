
import RowHorizontal from "../../../assets/outline/RowHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RowHorizontalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RowHorizontal} data-testid="RowHorizontalIcon" className={classes} />
  );
}
