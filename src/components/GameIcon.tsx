import {
  CodeIcon,
  LightningIcon,
  RocketLaunchIcon,
  ShieldIcon,
  SpeedometerIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
} from '@phosphor-icons/react';
import type { IconProps } from '@phosphor-icons/react';
import type { Achievement } from '../data/gamification';

const ICONS: Record<Achievement['icon'], React.ComponentType<IconProps>> = {
  trophy: TrophyIcon,
  zap: LightningIcon,
  rocket: RocketLaunchIcon,
  star: StarIcon,
  code: CodeIcon,
  users: UsersIcon,
  speed: SpeedometerIcon,
  shield: ShieldIcon,
};

interface GameIconProps {
  name: Achievement['icon'];
  size?: number;
  className?: string;
}

export function GameIcon({ name, size = 20, className }: GameIconProps) {
  const Icon = ICONS[name];
  return <Icon size={size} weight="fill" className={className} />;
}
