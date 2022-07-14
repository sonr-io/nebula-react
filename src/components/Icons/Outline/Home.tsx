
import Home from "../../../assets/outline/Home.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Home data-testid="HomeIcon" className={classes} />
  );
}
