
import Brush2 from "../../../assets/filled/Brush2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Brush2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Brush2} data-testid="Brush2Icon" className={classes} />
  );
}
