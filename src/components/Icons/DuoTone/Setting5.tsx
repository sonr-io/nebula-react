
import Setting5 from "../../../assets/duotone/Setting5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting5Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Setting5} data-testid="Setting5Icon" className={classes} />
  );
}
