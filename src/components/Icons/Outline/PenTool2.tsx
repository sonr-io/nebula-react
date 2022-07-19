
import PenTool2 from "../../../assets/outline/PenTool2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenTool2Icon({ className, dataTestid = "PenTool2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PenTool2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
