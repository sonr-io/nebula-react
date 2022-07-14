
import Fatrows from "../../../assets/duotone/Fatrows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FatrowsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Fatrows data-testid="FatrowsIcon" className={classes} />
  );
}
