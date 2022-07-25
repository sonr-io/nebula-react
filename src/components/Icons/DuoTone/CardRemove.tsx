
import CardRemove from "../../../assets/duotone/CardRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardRemoveIcon({ className, dataTestid = "CardRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
