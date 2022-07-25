
import CardPos from "../../../assets/filled/CardPos.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardPosIcon({ className, dataTestid = "CardPosIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardPos data-testid={dataTestid} className={classes} {...rest} />
  );
}
