
import CardRemove from "../../../assets/filled/CardRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardRemove data-testid="CardRemoveIcon" className={classes} />
  );
}
