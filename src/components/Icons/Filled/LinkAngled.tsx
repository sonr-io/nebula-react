
import LinkAngled from "../../../assets/filled/LinkAngled.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkAngledIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LinkAngled data-testid="LinkAngledIcon" className={classes} />
  );
}
