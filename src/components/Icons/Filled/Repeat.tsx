
import Repeat from "../../../assets/filled/Repeat.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeatIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Repeat data-testid="RepeatIcon" className={classes} />
  );
}
