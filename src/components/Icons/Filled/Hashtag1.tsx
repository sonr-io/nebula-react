
import Hashtag1 from "../../../assets/filled/Hashtag1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Hashtag1Icon({ className, dataTestid = "Hashtag1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Hashtag1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
