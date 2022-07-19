
import Moneys from "../../../assets/duotone/Moneys.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneysIcon({ className, dataTestid = "MoneysIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Moneys data-testid={dataTestid} className={classes} {...rest} />
  );
}
