
import Cup from "../../../assets/duotone/Cup.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CupIcon({ className, dataTestid = "CupIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cup data-testid={dataTestid} className={classes} {...rest} />
  );
}
