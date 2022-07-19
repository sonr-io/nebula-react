
import Civic from "../../../assets/duotone/Civic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CivicIcon({ className, dataTestid = "CivicIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Civic data-testid={dataTestid} className={classes} {...rest} />
  );
}
