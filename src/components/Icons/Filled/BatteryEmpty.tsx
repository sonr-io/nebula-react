
import BatteryEmpty from "../../../assets/filled/BatteryEmpty.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BatteryEmptyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BatteryEmpty data-testid="BatteryEmptyIcon" className={classes} />
  );
}
