
import Augur from "../../../assets/filled/Augur.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AugurIcon({ className, dataTestid = "AugurIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Augur data-testid={dataTestid} className={classes} {...rest} />
  );
}
