
import MinusCirlce from "../../../assets/outline/MinusCirlce.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusCirlceIcon({ className, dataTestid = "MinusCirlceIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MinusCirlce data-testid={dataTestid} className={classes} {...rest} />
  );
}
