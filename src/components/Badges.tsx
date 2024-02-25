import Badge from './Badge';

export default function Badges({ badges, className }: { badges: string[]; className?: string }) {
  return (
    <div className={"flex flex-wrap gap-4 w-full " + className}>
      {badges.map((badge, index) => <Badge key={badge + index} index={index}>{badge}</Badge>)}
    </div>
  );
}
