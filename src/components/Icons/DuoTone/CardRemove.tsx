
import CardRemove from "../../../assets/duotone/CardRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CardRemove} data-testid="CardRemoveIcon" className={classes} />
  );
}
