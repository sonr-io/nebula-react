
import Card from "../../../assets/filled/Card.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Card data-testid="CardIcon" className={classes} />
  );
}
