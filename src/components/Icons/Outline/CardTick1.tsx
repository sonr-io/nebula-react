
import CardTick1 from "../../../assets/outline/CardTick1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardTick1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardTick1 data-testid="CardTick1Icon" className={classes} />
  );
}
