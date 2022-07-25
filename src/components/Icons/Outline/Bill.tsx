
import Bill from "../../../assets/outline/Bill.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BillIcon({ className, dataTestid = "BillIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bill data-testid={dataTestid} className={classes} {...rest} />
  );
}
