
import Building4 from "../../../assets/filled/Building4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Building4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Building4 data-testid="Building4Icon" className={classes} />
  );
}
