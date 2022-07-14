
import MessageSearch from "../../../assets/outline/MessageSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageSearch} data-testid="MessageSearchIcon" className={classes} />
  );
}
