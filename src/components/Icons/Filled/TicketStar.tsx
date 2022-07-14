
import TicketStar from "../../../assets/filled/TicketStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketStarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TicketStar data-testid="TicketStarIcon" className={classes} />
  );
}
