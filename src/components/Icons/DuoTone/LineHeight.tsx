
import LineHeight from "../../../assets/duotone/LineHeight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LineHeightIcon({ className, dataTestid = "LineHeightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LineHeight data-testid={dataTestid} className={classes} {...rest} />
  );
}
