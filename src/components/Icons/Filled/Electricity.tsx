
import Electricity from "../../../assets/filled/Electricity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ElectricityIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Electricity data-testid="ElectricityIcon" className={classes} />
  );
}
