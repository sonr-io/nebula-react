
import Signpost from "../../../assets/filled/Signpost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SignpostIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Signpost data-testid="SignpostIcon" className={classes} />
  );
}
