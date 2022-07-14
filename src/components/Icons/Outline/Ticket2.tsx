
import Ticket2 from "../../../assets/outline/Ticket2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ticket2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ticket2 data-testid="Ticket2Icon" className={classes} />
  );
}
