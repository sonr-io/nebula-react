
import Dribbble from "../../../assets/filled/Dribbble.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DribbbleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Dribbble data-testid="DribbbleIcon" className={classes} />
  );
}
