
import CardEdit from "../../../assets/outline/CardEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardEditIcon({ className, dataTestid = "CardEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
