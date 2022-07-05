
import TicketExpired from "../../../assets/outline/TicketExpired.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TicketExpiredIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TicketExpired data-testid="TicketExpiredIcon" className={classes} />
  );
}
