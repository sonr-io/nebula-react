
import Shapes1 from "../../../assets/filled/Shapes1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Shapes1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Shapes1} data-testid="Shapes1Icon" className={classes} />
  );
}
