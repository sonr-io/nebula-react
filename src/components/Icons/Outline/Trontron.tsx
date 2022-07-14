
import Trontron from "../../../assets/outline/Trontron.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrontronIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Trontron data-testid="TrontronIcon" className={classes} />
  );
}
