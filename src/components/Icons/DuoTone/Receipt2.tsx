
import Receipt2 from "../../../assets/duotone/Receipt2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Receipt2Icon({ className, dataTestid = "Receipt2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Receipt2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
