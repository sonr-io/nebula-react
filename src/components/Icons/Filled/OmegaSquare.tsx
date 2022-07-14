
import OmegaSquare from "../../../assets/filled/OmegaSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OmegaSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <OmegaSquare data-testid="OmegaSquareIcon" className={classes} />
  );
}
