
import Minimize from "../../../assets/filled/Minimize.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinimizeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Minimize data-testid="MinimizeIcon" className={classes} />
  );
}
