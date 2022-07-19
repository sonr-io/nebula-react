
import CardTick from "../../../assets/outline/CardTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardTickIcon({ className, dataTestid = "CardTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
