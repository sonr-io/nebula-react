
import Code1 from "../../../assets/duotone/Code1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Code1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Code1} data-testid="Code1Icon" className={classes} />
  );
}
