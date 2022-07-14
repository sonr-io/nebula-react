
import Medal from "../../../assets/outline/Medal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MedalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Medal} data-testid="MedalIcon" className={classes} />
  );
}
