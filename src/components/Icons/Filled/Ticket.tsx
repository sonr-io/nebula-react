
import Ticket from "../../../assets/filled/Ticket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketIcon({ className, dataTestid = "TicketIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ticket data-testid={dataTestid} className={classes} {...rest} />
  );
}
