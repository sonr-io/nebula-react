
import TicketStar from "../../../assets/filled/TicketStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TicketStarIcon({ className, dataTestid = "TicketStarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TicketStar data-testid={dataTestid} className={classes} {...rest} />
  );
}
