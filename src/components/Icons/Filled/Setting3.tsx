
import Setting3 from "../../../assets/filled/Setting3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Setting3} data-testid="Setting3Icon" className={classes} />
  );
}
