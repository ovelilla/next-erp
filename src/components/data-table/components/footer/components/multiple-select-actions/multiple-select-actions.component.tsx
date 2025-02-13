// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./constants/multiple-select-actions.constants";
// Hooks
import { MultipleSelectActionsHook } from "./hooks/multiple-select-actions.hook";
// Types
import type { MultipleSelectActionsProps } from "./types/multiple-select-actions.component.types";

function MultipleSelectActions<TData>({
  multipleSelectActions,
  table,
}: MultipleSelectActionsProps<TData>) {
  const { selectedRows } = MultipleSelectActionsHook({ table });

  if (!selectedRows.length) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 lg:gap-6">
      {multipleSelectActions.map(({ label, icon: Icon, onClick }) => (
        <Button
          key={label}
          {...{
            ...constants.BUTTON_PROPS,
            onClick: () => onClick(selectedRows),
          }}
        >
          {<Icon className="h-4 w-4" />}
        </Button>
      ))}
    </div>
  );
}

export { MultipleSelectActions };
