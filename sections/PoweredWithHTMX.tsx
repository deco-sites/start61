
export interface Props {
  /**
   * The label for the input field
   */
  label?: string;
  /**
   * The placeholder text for the input field
   */
  placeholder?: string;
  /**
   * The URL of the mock endpoint to send requests to
   */
  endpoint?: string;
  /**
   * The HTMX content to render
   * @format code
   * @language html
   */
  htmxContent?: unknown;
}

export default function PoweredWithHTMX({
  label = "Enter text",
  placeholder = "Type something...",
  endpoint = "/mock-endpoint",
  htmxContent = `
    <div>
      <input type="text" name="query" placeholder="Type something..." 
             hx-post="/mock-endpoint" 
             hx-trigger="keyup changed delay:500ms"
             hx-target="#result"
             class="input input-bordered">
      <div id="result"></div>
    </div>
  `,
}: Props) {
  return (
    <div class="powered-with-htmx">
      <label class="label">
        <span class="label-text">{label}</span>
      </label>
      <div dangerouslySetInnerHTML={{ __html: htmxContent }}></div>
    </div>
  );
}