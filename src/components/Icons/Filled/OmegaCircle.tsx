
import OmegaCircle from "../../../assets/filled/OmegaCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OmegaCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <OmegaCircle data-testid="OmegaCircleIcon" className={classes} />
  );
}
