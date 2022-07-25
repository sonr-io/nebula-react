
import Ram2 from "../../../assets/outline/Ram2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ram2Icon({ className, dataTestid = "Ram2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ram2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
