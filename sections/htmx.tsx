import { useSection } from "deco/hooks/useSection.ts";

export default function Section({ count = 0 }: { count: number }) {
  return (
    <div class="flex items-center justify-center gap-4">
      <span>{count}</span>
      <a href={useSection({ props: { count: count + 1 } })}>See next integer</a>
    </div>
  );
}
