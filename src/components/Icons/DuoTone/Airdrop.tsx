
import Airdrop from "../../../assets/duotone/Airdrop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AirdropIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Airdrop data-testid="AirdropIcon" className={classes} />
  );
}
