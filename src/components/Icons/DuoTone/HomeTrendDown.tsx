
import HomeTrendDown from "../../../assets/duotone/HomeTrendDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeTrendDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HomeTrendDown} data-testid="HomeTrendDownIcon" className={classes} />
  );
}
