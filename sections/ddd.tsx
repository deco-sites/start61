import { useSection } from "deco/hooks/useSection.ts";
import { useState } from "preact/hooks";

interface ListItem {
  id: number;
  name: string;
}

interface Props {
  /**
   * @description The initial list of items.
   * @format textarea
   */
  initialItems?: string;
}

export default function Section({ initialItems = "" }: Props) {
  const [items, setItems] = useState<ListItem[]>(
    initialItems.split("\n").map((name, id) => ({ id, name: name.trim() }))
  );

  const handleAddItem = () => {
    setItems([...items, { id: items.length, name: "" }]);
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id: number, name: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, name } : item)));
  };

  return (
    <div class="container mx-auto p-4">
      <ul class="list-disc pl-4">
        {items.map((item) => (
          <li key={item.id} class="flex items-center gap-2">
            <input
              type="text"
              value={item.name}
              onInput={(e) => handleUpdateItem(item.id, e.currentTarget.value)}
              class="input input-bordered w-full"
            />
            <button
              hx-get={useSection({ props: { initialItems: items.filter((i) => i.id !== item.id).map((i) => i.name).join("\n") } })}
              hx-target="closest section"
              hx-swap="outerHTML"
              class="btn btn-sm btn-circle btn-outline no-animation"
            >
              <span class="inline [.htmx-request_&]:hidden">-</span>
              <span class="hidden [.htmx-request_&]:inline loading loading-spinner" />
            </button>
          </li>
        ))}
      </ul>
      <button
        hx-get={useSection({ props: { initialItems: [...items.map((i) => i.name), ""].join("\n") } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-primary mt-4"
      >
        Add Item
      </button>
    </div>
  );
}