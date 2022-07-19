
import Ticket2 from "../../../assets/filled/Ticket2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ticket2Icon({ className, dataTestid = "Ticket2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ticket2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
