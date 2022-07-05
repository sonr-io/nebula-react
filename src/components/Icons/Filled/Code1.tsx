
import Code1 from "../../../assets/filled/Code1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Code1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Code1 data-testid="Code1Icon" className={classes} />
  );
}
