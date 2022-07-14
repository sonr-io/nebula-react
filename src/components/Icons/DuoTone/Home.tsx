
import Home from "../../../assets/duotone/Home.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Home} data-testid="HomeIcon" className={classes} />
  );
}
