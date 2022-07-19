
import MoneyAdd from "../../../assets/outline/MoneyAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyAddIcon({ className, dataTestid = "MoneyAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneyAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
