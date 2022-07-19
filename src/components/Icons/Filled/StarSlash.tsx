
import StarSlash from "../../../assets/filled/StarSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StarSlashIcon({ className, dataTestid = "StarSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <StarSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
