
import Bill from "../../../assets/outline/Bill.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BillIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Bill} data-testid="BillIcon" className={classes} />
  );
}
