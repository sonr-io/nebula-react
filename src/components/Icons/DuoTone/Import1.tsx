
import Import1 from "../../../assets/duotone/Import1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Import1Icon({ className, dataTestid = "Import1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Import1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
