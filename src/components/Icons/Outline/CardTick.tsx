
import CardTick from "../../../assets/outline/CardTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardTick data-testid="CardTickIcon" className={classes} />
  );
}
