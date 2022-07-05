
import CardRemove1 from "../../../assets/duotone/CardRemove1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardRemove1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardRemove1 data-testid="CardRemove1Icon" className={classes} />
  );
}
