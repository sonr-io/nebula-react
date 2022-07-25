
import Card from "../../../assets/outline/Card.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardIcon({ className, dataTestid = "CardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Card data-testid={dataTestid} className={classes} {...rest} />
  );
}
