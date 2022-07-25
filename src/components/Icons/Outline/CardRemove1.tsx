
import CardRemove1 from "../../../assets/outline/CardRemove1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardRemove1Icon({ className, dataTestid = "CardRemove1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardRemove1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
