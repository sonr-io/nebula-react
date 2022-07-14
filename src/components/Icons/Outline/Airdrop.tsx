
import Airdrop from "../../../assets/outline/Airdrop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirdropIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Airdrop data-testid="AirdropIcon" className={classes} />
  );
}
