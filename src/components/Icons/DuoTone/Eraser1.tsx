
import Eraser1 from "../../../assets/duotone/Eraser1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Eraser1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Eraser1} data-testid="Eraser1Icon" className={classes} />
  );
}
