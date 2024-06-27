import { usePartialSection } from "deco/hooks/usePartialSection.ts";

interface Props {
  /** @description Initial count value */
  initialCount?: number;
  /** @description Color for the counter text @format color-input */
  counterColor?: string;
  /** @description Background color for the buttons @format color-input */
  buttonBgColor?: string;
  /** @description Text color for the buttons @format color-input */
  buttonTextColor?: string;
}

const Counter = ({
  initialCount = 0,
  counterColor = "#000000",
  buttonBgColor = "#4CAF50",
  buttonTextColor = "#FFFFFF",
}: Props) => {
  return (
    <div class="flex flex-col items-center justify-center p-4">
      <div
        class="text-4xl font-bold mb-4"
        style={{ color: counterColor }}
        hx-swap-oob="true"
        id="counter-value"
      >
        {initialCount}
      </div>
      <div class="flex space-x-4">
        <button
          class="btn"
          style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          {...usePartialSection<typeof Counter>({
            props: { initialCount: initialCount - 1 },
          })}
        >
          Decrease
        </button>
        <button
          class="btn"
          style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
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