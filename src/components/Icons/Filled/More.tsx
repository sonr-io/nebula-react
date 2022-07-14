
import More from "../../../assets/filled/More.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={More} data-testid="MoreIcon" className={classes} />
  );
}
