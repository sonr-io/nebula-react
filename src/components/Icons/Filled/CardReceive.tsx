
import CardReceive from "../../../assets/filled/CardReceive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardReceiveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CardReceive data-testid="CardReceiveIcon" className={classes} />
  );
}
