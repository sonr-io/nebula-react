
import Home1 from "../../../assets/outline/Home1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Home1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Home1 data-testid="Home1Icon" className={classes} />
  );
}
