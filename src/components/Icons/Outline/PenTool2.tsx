
import PenTool2 from "../../../assets/outline/PenTool2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PenTool2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PenTool2 data-testid="PenTool2Icon" className={classes} />
  );
}
