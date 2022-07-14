
import Cake from "../../../assets/duotone/Cake.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CakeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Cake} data-testid="CakeIcon" className={classes} />
  );
}
