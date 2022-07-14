
import Radar2 from "../../../assets/filled/Radar2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Radar2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Radar2} data-testid="Radar2Icon" className={classes} />
  );
}
