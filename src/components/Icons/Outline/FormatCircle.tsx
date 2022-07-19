
import FormatCircle from "../../../assets/outline/FormatCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FormatCircleIcon({ className, dataTestid = "FormatCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FormatCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
