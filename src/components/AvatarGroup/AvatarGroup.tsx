import { AvatarGroupProps, AvatarGroupSize } from "../../types/avatarGroupProps";
import { Avatar } from "../Avatar/Avatar";

export const avatarGroupMaxElements: { [key in AvatarGroupSize]: number } = {
  sm: 4,
  md: 5,
  lg: 6,
}

const avatarGroupRadius: { [key in AvatarGroupSize]: number } = {
  sm: 18,
  md: 22,
  lg: 26,
}

const avatarGroupOffset: { [key in AvatarGroupSize]: number } = {
  sm: 16,
  md: 20,
  lg: 24,
}

function getTransform(elementIndex: number, totalElements: number, size: AvatarGroupSize): React.CSSProperties {
  const extraRadius = totalElements > avatarGroupMaxElements[size] ? 6 : 0
  const offset = avatarGroupOffset[size];
  const radius = avatarGroupRadius[size] + extraRadius;
  const angle = Math.PI / 2 + 2 * Math.PI * elementIndex / Math.min(totalElements, avatarGroupMaxElements[size]);

  const x = radius * Math.cos(angle) + offset;
  const y = -radius * Math.sin(angle) + offset;
  return { transform: `translate(${x}px, ${y}px` }
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, size = "md" }) => {
  return (
    <>
      {avatars.map((avatar, i) => (
        <div key={`${i}`} className="absolute">
          <Avatar alt={avatar.alt} src={avatar.src} size={size} style={getTransform(i, avatars.length, size)} />
        </div>
      ))}
      {(avatars.length > avatarGroupMaxElements[size]) && <Avatar alt={`${avatars.length}`} size={size} style={{ transform: `translate(${avatarGroupOffset[size]}px, ${avatarGroupOffset[size]}px` }} />}
    </>
  )
}
