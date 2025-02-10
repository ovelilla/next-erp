// Components
import { AddRecord } from "./components/add-record/add-record.component";
import { Filter } from "./components/filter/filter.component";
import { Visibility } from "./components/visibility/visibility.component";
// Types
import type { HeaderProps } from "./types/header.component.types";

function Header<TData>({
  globalFilter,
  onCreate,
  setGlobalFilter,
  table,
}: HeaderProps<TData>) {
  return (
    <div className="flex items-center gap-4">
      <Filter {...{ globalFilter, setGlobalFilter }} />
      <AddRecord {...{ onCreate }} />
      <Visibility {...{ table }} />
    </div>
  );
}

export { Header };
