
import Card from "../../../assets/duotone/Card.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Card} data-testid="CardIcon" className={classes} />
  );
}
