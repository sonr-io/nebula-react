
import Subtitle from "../../../assets/duotone/Subtitle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SubtitleIcon({ className, dataTestid = "SubtitleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Subtitle data-testid={dataTestid} className={classes} {...rest} />
  );
}
