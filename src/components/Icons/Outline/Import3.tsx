
import Import3 from "../../../assets/outline/Import3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Import3Icon({ className, dataTestid = "Import3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Import3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
