
import CardRemove from "../../../assets/outline/CardRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardRemove data-testid="CardRemoveIcon" className={classes} />
  );
}
