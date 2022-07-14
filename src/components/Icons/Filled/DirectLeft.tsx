
import DirectLeft from "../../../assets/filled/DirectLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectLeft} data-testid="DirectLeftIcon" className={classes} />
  );
}
