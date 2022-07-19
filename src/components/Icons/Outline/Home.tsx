
import Home from "../../../assets/outline/Home.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeIcon({ className, dataTestid = "HomeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Home data-testid={dataTestid} className={classes} {...rest} />
  );
}
