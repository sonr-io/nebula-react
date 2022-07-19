
import Attach from "../../../assets/filled/Attach.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AttachIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Attach data-testid="AttachIcon" className={classes} />
  );
}
