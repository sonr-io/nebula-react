
import Ticket from "../../../assets/duotone/Ticket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TicketIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ticket data-testid="TicketIcon" className={classes} />
  );
}
