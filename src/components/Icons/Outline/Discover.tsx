
import Discover from "../../../assets/outline/Discover.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiscoverIcon({ className, dataTestid = "DiscoverIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Discover data-testid={dataTestid} className={classes} {...rest} />
  );
}
