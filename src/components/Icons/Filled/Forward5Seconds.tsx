
import Forward5Seconds from "../../../assets/filled/Forward5Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Forward5SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Forward5Seconds} data-testid="Forward5SecondsIcon" className={classes} />
  );
}
