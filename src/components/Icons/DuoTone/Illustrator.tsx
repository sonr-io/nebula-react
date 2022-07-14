
import Illustrator from "../../../assets/duotone/Illustrator.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IllustratorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Illustrator data-testid="IllustratorIcon" className={classes} />
  );
}
