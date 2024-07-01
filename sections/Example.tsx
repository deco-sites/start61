import { useSection } from "deco/hooks/useSection.ts";

interface Props {
  value?: string;
}

export default function Section({ value = "" }: Props) {
  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <input
        type="text"
        value={value}
        class="input input-bordered"
        onInput={(e) => {
          const newValue = (e.target as HTMLInputElement).value;
          useSection({ props: { value: newValue } });
        }}
      />
    </div>
  );
}