
import CardPos from "../../../assets/duotone/CardPos.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardPosIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardPos data-testid="CardPosIcon" className={classes} />
  );
}
