
import BrifecaseCross from "../../../assets/filled/BrifecaseCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrifecaseCrossIcon({ className, dataTestid = "BrifecaseCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BrifecaseCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
