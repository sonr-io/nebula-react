
import Polyswarm from "../../../assets/duotone/Polyswarm.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PolyswarmIcon({ className, dataTestid = "PolyswarmIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Polyswarm data-testid={dataTestid} className={classes} {...rest} />
  );
}
