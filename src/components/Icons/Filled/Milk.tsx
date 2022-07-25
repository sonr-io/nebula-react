
import Milk from "../../../assets/filled/Milk.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MilkIcon({ className, dataTestid = "MilkIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Milk data-testid={dataTestid} className={classes} {...rest} />
  );
}
