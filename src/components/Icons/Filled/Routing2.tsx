
import Routing2 from "../../../assets/filled/Routing2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Routing2Icon({ className, dataTestid = "Routing2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Routing2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
