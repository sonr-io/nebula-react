
import CardReceive from "../../../assets/outline/CardReceive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardReceiveIcon({ className, dataTestid = "CardReceiveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardReceive data-testid={dataTestid} className={classes} {...rest} />
  );
}
