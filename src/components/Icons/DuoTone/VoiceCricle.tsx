
import VoiceCricle from "../../../assets/duotone/VoiceCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VoiceCricleIcon({ className, dataTestid = "VoiceCricleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VoiceCricle data-testid={dataTestid} className={classes} {...rest} />
  );
}
