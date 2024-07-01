import { usePartialSection } from "deco/hooks/usePartialSection.ts";

interface Item {
  id: string;
  name: string;
  /**
   * @format rich-text
   * @description The item description
   */
  description: string;
  /**
   * @format color-input
   * @description The item color
   */
  color: string;
  /**
   * @format checkbox
   * @description Show the item details
   */
  showDetails: boolean;
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
            class={`flex flex-col items-start justify-between bg-base-200 p-3 rounded-lg ${
              item.showDetails ? "bg-" + item.color + "-200" : ""
            }`}
          >
            <span class="text-lg font-bold">{item.name}</span>
            {item.showDetails && (
              <div class="mt-2">
                <p class="text-gray-600">{item.description}</p>
              </div>
            )}
            <div class="flex items-center justify-end mt-2 w-full">
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
              <button
                class="btn btn-primary btn-sm ml-2"
                {...usePartialSection<typeof DynamicList>({
                  props: {
                    items: items.map((i) =>
                      i.id === item.id
                        ? { ...i, showDetails: !i.showDetails }
                        : i
                    ),
                  },
                })}
                hx-swap="outerHTML"
              >
                {item.showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {items.length === 0 && (
        <p class="text-center text-gray-500 mt-4">No items in the list</p>
      )}
    </div>
  );
}