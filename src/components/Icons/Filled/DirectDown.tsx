
import DirectDown from "../../../assets/filled/DirectDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectDown} data-testid="DirectDownIcon" className={classes} />
  );
}
