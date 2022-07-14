
import Radar1 from "../../../assets/filled/Radar1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Radar1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Radar1} data-testid="Radar1Icon" className={classes} />
  );
}
