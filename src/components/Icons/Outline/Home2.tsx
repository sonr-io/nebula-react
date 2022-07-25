
import Home2 from "../../../assets/outline/Home2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Home2Icon({ className, dataTestid = "Home2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Home2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
