
import CardAdd from "../../../assets/duotone/CardAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardAdd data-testid="CardAddIcon" className={classes} />
  );
}
