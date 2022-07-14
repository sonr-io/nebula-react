
import Setting5 from "../../../assets/filled/Setting5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting5Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Setting5 data-testid="Setting5Icon" className={classes} />
  );
}
