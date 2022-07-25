
import CardTick1 from "../../../assets/filled/CardTick1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardTick1Icon({ className, dataTestid = "CardTick1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardTick1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
