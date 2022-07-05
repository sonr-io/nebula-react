
import Convertshape2 from "../../../assets/duotone/Convertshape2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Convertshape2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Convertshape2 data-testid="Convertshape2Icon" className={classes} />
  );
}
