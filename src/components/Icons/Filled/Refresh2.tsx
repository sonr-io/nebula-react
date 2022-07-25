
import Refresh2 from "../../../assets/filled/Refresh2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Refresh2Icon({ className, dataTestid = "Refresh2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Refresh2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
