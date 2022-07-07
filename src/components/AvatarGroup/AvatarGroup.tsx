import { AvatarGroupProps, AvatarGroupSize } from "../../types/avatarGroupProps";
import { Avatar } from "../Avatar/Avatar";

function getTransform(elementIndex: number, totalElements: number): React.CSSProperties {
  const offset = 15;
  const radius = 30;
  const angle = Math.PI / 2 + 2 * Math.PI * elementIndex / totalElements;

  const x = radius * Math.cos(angle) + offset;
  const y = -radius * Math.sin(angle) + offset;
  return { transform: `translate(${x}px, ${y}px` }
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, size = "md" }) => {
  return (
    <>
      {avatars.map((avatar, i) => (
        <div key={`${i}`} className="absolute">
          <Avatar alt={avatar.alt} src={avatar.src} style={getTransform(i, avatars.length)} />
        </div>
      ))}
    </>
  )
}
