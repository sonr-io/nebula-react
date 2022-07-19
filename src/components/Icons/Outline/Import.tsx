
import Import from "../../../assets/outline/Import.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ImportIcon({ className, dataTestid = "ImportIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Import data-testid={dataTestid} className={classes} {...rest} />
  );
}
