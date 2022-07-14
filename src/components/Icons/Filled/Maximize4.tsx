
import Maximize4 from "../../../assets/filled/Maximize4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Maximize4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Maximize4} data-testid="Maximize4Icon" className={classes} />
  );
}
