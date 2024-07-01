import { usePartialSection } from "deco/hooks/usePartialSection.ts";

interface Item {
  id: string;
  name: string;
  /**
   * @format rich-text
   * @description The item description
   */
  description?: string;
  /**
   * @format color-input
   * @description The item color
   */
  color?: string;
}

interface Props {
  /**
   * @description List of items to display
   */
  items?: Item[];
}

export default function DynamicList({ items = [] }: Props) {
  return (
    <div class="container mx-auto p-4">
      <ul class="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            class={`flex items-center justify-between bg-base-200 p-3 rounded-lg ${
              item.color ? `bg-[${item.color}]` : ""
            }`}
          >
            <div>
              <span class="text-lg">{item.name}</span>
              {item.description && (
                <p class="text-gray-500">{item.description}</p>
              )}
            </div>
            <button
              class="btn btn-error btn-sm"
              {...usePartialSection<typeof DynamicList>({
                props: {
                  items: items.filter((i) => i.id !== item.id),
                },
              })}
              hx-swap="outerHTML"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {items.length === 0 && (
        <p class="text-center text-gray-500 mt-4">No items in the list</p>
      )}
    </div>
  );
}