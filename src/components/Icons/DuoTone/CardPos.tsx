
import CardPos from "../../../assets/duotone/CardPos.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardPosIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CardPos} data-testid="CardPosIcon" className={classes} />
  );
}
