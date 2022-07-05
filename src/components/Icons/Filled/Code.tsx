
import Code from "../../../assets/filled/Code.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CodeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Code data-testid="CodeIcon" className={classes} />
  );
}
