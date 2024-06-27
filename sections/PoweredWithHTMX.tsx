import { HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @title Initial Count
   * @description The starting value for the counter
   */
  initialCount?: number;
  /**
   * @title Increment Text
   * @description Text for the increment button
   */
  incrementText?: string;
  /**
   * @title Decrement Text
   * @description Text for the decrement button
   */
  decrementText?: string;
  /**
   * @title Counter Style
   * @description Custom styles for the counter display
   * @format code
   * @language css
   */
  counterStyle?: string;
  /**
   * @title HTMX Content
   * @description The HTMX-powered content for the counter
   * @format code
   * @language html
   */
  htmxContent?: HTMLWidget;
}

export default function HTMXCounter({
  initialCount = 0,
  incrementText = "Increment",
  decrementText = "Decrement",
  counterStyle = "font-bold text-2xl",
  htmxContent = `
    <div class="flex flex-col items-center space-y-4">
      <div id="counter" class="font-bold text-2xl">${initialCount}</div>
      <div class="flex space-x-4">
        <button
          class="btn btn-primary"
          hx-post="/increment"
          hx-target="#counter"
          hx-swap="innerHTML"
        >
          ${incrementText}
        </button>
        <button
          class="btn btn-secondary"
          hx-post="/decrement"
          hx-target="#counter"
          hx-swap="innerHTML"
        >
          ${decrementText}
        </button>
      </div>
    </div>
  `,
}: Props) {
  return (
    <div class="htmx-counter p-6 bg-base-200 rounded-lg shadow-md">
      <div dangerouslySetInnerHTML={{ __html: htmxContent }}></div>
      <style>{`
        #counter {
          ${counterStyle}
        }
      `}</style>
    </div>
  );
}