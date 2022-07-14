
import Okb from "../../../assets/outline/Okb.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OkbIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Okb} data-testid="OkbIcon" className={classes} />
  );
}
