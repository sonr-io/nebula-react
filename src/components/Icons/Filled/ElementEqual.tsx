
import ElementEqual from "../../../assets/filled/ElementEqual.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ElementEqualIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ElementEqual} data-testid="ElementEqualIcon" className={classes} />
  );
}
