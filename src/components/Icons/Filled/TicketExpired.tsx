
import TicketExpired from "../../../assets/filled/TicketExpired.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketExpiredIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TicketExpired data-testid="TicketExpiredIcon" className={classes} />
  );
}
