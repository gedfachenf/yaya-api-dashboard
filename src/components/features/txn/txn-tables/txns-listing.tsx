"use client";
import { DataTable as TxnDataTable } from "@/components/ui/table/data-table";
import { getColumns } from "./columns";
import { PaginatedData } from "@/interfaces/app";
import TopContent from "./top-content";
import { Separator } from "@/components/ui/separator";
import { TxnI } from "@/interfaces/txn";
import { currentUserName } from "@/constants/data";

export default function TxnListingPage({
  paginatedData,
}: {
  paginatedData: PaginatedData<TxnI>;
}) {
  return (
    <div className="flex flex-1 flex-col space-y-2">
      <TopContent />
      <Separator />
      <TxnDataTable
        columns={getColumns(currentUserName)}
        data={paginatedData?.data}
        totalItems={paginatedData.total}
      />
    </div>
  );
}
