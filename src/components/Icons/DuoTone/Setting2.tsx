
import Setting2 from "../../../assets/duotone/Setting2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Setting2} data-testid="Setting2Icon" className={classes} />
  );
}
