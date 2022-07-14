
import Nem from "../../../assets/duotone/Nem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NemIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Nem data-testid="NemIcon" className={classes} />
  );
}
