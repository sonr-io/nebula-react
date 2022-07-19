
import Home1 from "../../../assets/outline/Home1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Home1Icon({ className, dataTestid = "Home1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Home1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
