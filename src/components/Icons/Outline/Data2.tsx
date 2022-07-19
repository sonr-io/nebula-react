
import Data2 from "../../../assets/outline/Data2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Data2Icon({ className, dataTestid = "Data2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Data2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
