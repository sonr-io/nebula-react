
import Signpost from "../../../assets/filled/Signpost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SignpostIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Signpost} data-testid="SignpostIcon" className={classes} />
  );
}
