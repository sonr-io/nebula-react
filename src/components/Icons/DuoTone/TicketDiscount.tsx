
import TicketDiscount from "../../../assets/duotone/TicketDiscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketDiscountIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TicketDiscount} data-testid="TicketDiscountIcon" className={classes} />
  );
}
