
import Educare from "../../../assets/filled/Educare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EducareIcon({ className, dataTestid = "EducareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Educare data-testid={dataTestid} className={classes} {...rest} />
  );
}
