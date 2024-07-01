import { useSection } from "deco/hooks/useSection.ts";

interface Props {
  value?: string;
  placeholder?: string;
  //@format rich-text
  label?: string;
  //@format color-input
  labelColor?: string = "#000000";
}

export default function Section({
  value = "",
  placeholder = "Click to edit",
  label = "Label",
  labelColor = "#000000",
}: Props) {
  return (
    <div class="container flex flex-col items-center justify-center gap-4">
      <span style={`color: ${labelColor}`}>{label}</span>
      <div
        hx-get={useSection({ props: { value: "" } })}
        hx-target="closest div"
        hx-swap="outerHTML"
        class="input input-bordered w-full max-w-xs cursor-pointer"
      >
        {value || placeholder}
      </div>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        class="input input-bordered w-full max-w-xs"
        onInput={(e) => {
          const newValue = (e.target as HTMLInputElement).value;
          useSection({ props: { value: newValue } });
        }}
      />
    </div>
  );
}