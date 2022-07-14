
import Dash from "../../../assets/outline/Dash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Dash} data-testid="DashIcon" className={classes} />
  );
}
