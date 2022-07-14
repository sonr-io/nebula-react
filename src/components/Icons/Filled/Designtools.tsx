
import Designtools from "../../../assets/filled/Designtools.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DesigntoolsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Designtools data-testid="DesigntoolsIcon" className={classes} />
  );
}
