
import People from "../../../assets/duotone/People.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PeopleIcon({ className, dataTestid = "PeopleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <People data-testid={dataTestid} className={classes} {...rest} />
  );
}
