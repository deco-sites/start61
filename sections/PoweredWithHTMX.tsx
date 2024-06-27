import { usePartialSection } from "deco/hooks/usePartialSection.ts";

interface Props {
  /**
   * @description The initial count value
   */
  initialCount?: number;
  /**
   * @description The title of the counter
   * @format rich-text
   */
  title?: string;
  /**
   * @description The color of the counter text
   * @format color-input
   */
  textColor?: string;
}

const Counter = ({ initialCount = 0, title = "Counter", textColor = "#000000" }: Props) => {
  return (
    <div class="flex flex-col items-center justify-center p-4">
      <h2 class="text-2xl font-bold mb-4" style={{ color: textColor }}>{title}</h2>
      <div class="text-4xl font-bold mb-4" style={{ color: textColor }} id="count">
        {initialCount}
      </div>
      <div class="flex space-x-4">
        <button
          class="btn btn-primary"
          {...usePartialSection<typeof Counter>({
            props: { initialCount: initialCount - 1 },
          })}
        >
          Decrease
        </button>
        <button
          class="btn btn-primary"
          {...usePartialSection<typeof Counter>({
            props: { initialCount: initialCount + 1 },
          })}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;