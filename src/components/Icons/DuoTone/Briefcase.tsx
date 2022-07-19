
import Briefcase from "../../../assets/duotone/Briefcase.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BriefcaseIcon({ className, dataTestid = "BriefcaseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Briefcase data-testid={dataTestid} className={classes} {...rest} />
  );
}
