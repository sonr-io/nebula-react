
import Bill from "../../../assets/duotone/Bill.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BillIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bill data-testid="BillIcon" className={classes} />
  );
}
