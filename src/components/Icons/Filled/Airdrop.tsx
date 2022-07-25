
import Airdrop from "../../../assets/filled/Airdrop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirdropIcon({ className, dataTestid = "AirdropIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Airdrop data-testid={dataTestid} className={classes} {...rest} />
  );
}
