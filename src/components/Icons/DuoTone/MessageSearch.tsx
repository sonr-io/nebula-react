
import MessageSearch from "../../../assets/duotone/MessageSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageSearch data-testid="MessageSearchIcon" className={classes} />
  );
}
