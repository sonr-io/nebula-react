
import Bus from "../../../assets/filled/Bus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Bus} data-testid="BusIcon" className={classes} />
  );
}
