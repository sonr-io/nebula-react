
import MobileProgramming from "../../../assets/duotone/MobileProgramming.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MobileProgrammingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MobileProgramming} data-testid="MobileProgrammingIcon" className={classes} />
  );
}
