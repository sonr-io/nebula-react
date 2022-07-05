
import Home from "../../../assets/duotone/Home.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HomeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Home data-testid="HomeIcon" className={classes} />
  );
}
