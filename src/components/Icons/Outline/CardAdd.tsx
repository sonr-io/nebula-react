
import CardAdd from "../../../assets/outline/CardAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardAddIcon({ className, dataTestid = "CardAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
