
import CardReceive from "../../../assets/outline/CardReceive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardReceiveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardReceive data-testid="CardReceiveIcon" className={classes} />
  );
}
