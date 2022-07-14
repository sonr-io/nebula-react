
import Square3 from "../../../assets/duotone/Square3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Square3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Square3} data-testid="Square3Icon" className={classes} />
  );
}
