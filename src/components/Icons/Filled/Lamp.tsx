
import Lamp from "../../../assets/filled/Lamp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LampIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Lamp} data-testid="LampIcon" className={classes} />
  );
}
