import { useSignal } from "@preact/signals";
import { useSection } from "deco/hooks/useSection.ts";

interface Item {
  id: number;
  name: string;
}

export default function TodoList({
  items = [{ id: 1, name: "Initial Item" }],
}: {
  items?: Item[];
}) {
  const newItemName = useSignal("");
  const itemsList = useSignal(items);

  const addItem = () => {
    if (newItemName.value.trim()) {
      itemsList.value = [
        ...itemsList.value,
        { id: Date.now(), name: newItemName.value },
      ];
      newItemName.value = "";
    }
  };

  const removeItem = (id: number) => {
    itemsList.value = itemsList.value.filter((item) => item.id !== id);
  };

  return (
    <div class="container mx-auto my-8">
      <div class="mb-4">
        <input
          type="text"
          value={newItemName.value}
          onInput={(e) => (newItemName.value = e.currentTarget.value)}
          placeholder="Add a new item"
          class="input input-bordered w-full"
        />
        <button onClick={addItem} class="btn btn-primary mt-2">
          Add
        </button>
      </div>
      <ul class="menu bg-base-100 rounded-box">
        {itemsList.value.map((item) => (
          <li key={item.id} class="flex justify-between items-center">
            <span>{item.name}</span>
            <div>
              <button
                hx-get={useSection({
                  props: {
                    items: itemsList.value.filter(
                      (i) => i.id !== item.id
                    ),
                  },
                })}
                hx-target="closest section"
                hx-swap="outerHTML"
                class="btn btn-sm btn-error btn-circle"
              >
                <span class="inline [.htmx-request_&]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <span class="hidden [.htmx-request_&]:inline loading loading-spinner" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}