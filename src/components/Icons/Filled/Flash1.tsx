
import Flash1 from "../../../assets/filled/Flash1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Flash1Icon({ className, dataTestid = "Flash1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Flash1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
