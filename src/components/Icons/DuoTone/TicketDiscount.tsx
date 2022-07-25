
import TicketDiscount from "../../../assets/duotone/TicketDiscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketDiscountIcon({ className, dataTestid = "TicketDiscountIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TicketDiscount data-testid={dataTestid} className={classes} {...rest} />
  );
}
