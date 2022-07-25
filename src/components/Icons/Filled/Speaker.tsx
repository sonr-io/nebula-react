
import Speaker from "../../../assets/filled/Speaker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SpeakerIcon({ className, dataTestid = "SpeakerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Speaker data-testid={dataTestid} className={classes} {...rest} />
  );
}
