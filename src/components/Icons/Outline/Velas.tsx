
import Velas from "../../../assets/outline/Velas.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VelasIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Velas} data-testid="VelasIcon" className={classes} />
  );
}
