
import Code from "../../../assets/filled/Code.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CodeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Code} data-testid="CodeIcon" className={classes} />
  );
}
