
import Maximize from "../../../assets/filled/Maximize.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MaximizeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Maximize data-testid="MaximizeIcon" className={classes} />
  );
}
