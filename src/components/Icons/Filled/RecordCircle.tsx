
import RecordCircle from "../../../assets/filled/RecordCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RecordCircleIcon({ className, dataTestid = "RecordCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RecordCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
