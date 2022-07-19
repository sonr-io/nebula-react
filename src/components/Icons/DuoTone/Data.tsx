
import Data from "../../../assets/duotone/Data.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DataIcon({ className, dataTestid = "DataIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Data data-testid={dataTestid} className={classes} {...rest} />
  );
}
