
import SaveMinus from "../../../assets/outline/SaveMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SaveMinusIcon({ className, dataTestid = "SaveMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SaveMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
