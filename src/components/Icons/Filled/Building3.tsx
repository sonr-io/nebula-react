
import Building3 from "../../../assets/filled/Building3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Building3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Building3} data-testid="Building3Icon" className={classes} />
  );
}
