
import Ticket from "../../../assets/outline/Ticket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Ticket} data-testid="TicketIcon" className={classes} />
  );
}
