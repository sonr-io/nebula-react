
import TicketExpired from "../../../assets/duotone/TicketExpired.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketExpiredIcon({ className, dataTestid = "TicketExpiredIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TicketExpired data-testid={dataTestid} className={classes} {...rest} />
  );
}
