
import Frame9 from "../../../assets/duotone/Frame9.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Frame9Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Frame9} data-testid="Frame9Icon" className={classes} />
  );
}
