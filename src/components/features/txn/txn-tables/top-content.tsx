"use client";
import { DataTableSearch } from "@/components/ui/table/data-table-search";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export default function TopContent() {
  const currentPage = useQueryState(
    "page",
    parseAsInteger.withOptions({ shallow: false }).withDefault(1)
  );

  const [searchQuery, setSearchQuery] = useQueryState(
    "search",
    parseAsString.withOptions({ shallow: false }).withDefault("")
  );
  return (
    <div className="flex flex-wrap items-center justify-between">
      <DataTableSearch
        searchKey="name"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={currentPage[1]}
      />
    </div>
  );
}
