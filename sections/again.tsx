import { useSection } from "deco/hooks/useSection.ts";

export default function Counter({ count = 0 }: { count?: number }) {
  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <button
        hx-get={useSection({ props: { count: count - 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span class="inline [.htmx-request_&]:hidden">-</span>
        <span class="hidden [.htmx-request_&]:inline loading loading-spinner" />
      </button>
      <span>{count}</span>
      <button
        hx-get={useSection({ props: { count: count + 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span class="inline [.htmx-request_&]:hidden">+</span>
        <span class="hidden [.htmx-request_&]:inline loading loading-spinner" />
      </button>
    </div>
  );
}