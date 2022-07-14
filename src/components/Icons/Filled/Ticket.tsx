
import Ticket from "../../../assets/filled/Ticket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ticket data-testid="TicketIcon" className={classes} />
  );
}
