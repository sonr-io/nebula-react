
import Eraser1 from "../../../assets/filled/Eraser1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Eraser1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Eraser1 data-testid="Eraser1Icon" className={classes} />
  );
}
