
import TicketDiscount from "../../../assets/outline/TicketDiscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TicketDiscountIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TicketDiscount data-testid="TicketDiscountIcon" className={classes} />
  );
}
