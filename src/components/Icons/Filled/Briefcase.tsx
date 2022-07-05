
import Briefcase from "../../../assets/filled/Briefcase.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BriefcaseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Briefcase data-testid="BriefcaseIcon" className={classes} />
  );
}
