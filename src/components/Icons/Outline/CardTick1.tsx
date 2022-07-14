
import CardTick1 from "../../../assets/outline/CardTick1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardTick1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CardTick1} data-testid="CardTick1Icon" className={classes} />
  );
}
