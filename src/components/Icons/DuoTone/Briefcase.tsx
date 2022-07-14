
import Briefcase from "../../../assets/duotone/Briefcase.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BriefcaseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Briefcase data-testid="BriefcaseIcon" className={classes} />
  );
}