"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TxnI } from "@/interfaces/txn";
import { ArrowUpRight, ArrowDownLeft, Info as CauseIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TransactionModal } from "../txn-modal";

export const getColumns = (currentUserName: string): ColumnDef<TxnI>[] => {
  const columns: ColumnDef<TxnI>[] = [
    {
      accessorKey: "id",
      header: "Transaction ID",
      cell: ({ row }) => (
        <TransactionModal
          transaction={row.original}
          currentUser={currentUserName}
        />
      ),
    },
    {
      accessorKey: "sender.name",
      header: "Sender",
    },
    {
      accessorKey: "receiver.name",
      header: "Receiver",
    },
    {
      accessorKey: "amount_with_currency",
      header: "Amount",
    },
    {
      id: "status",
      header: "Status",
      cell: ({ row }) => {
        const { receiver, is_topup } = row.original;

        const isIncoming = is_topup || receiver.name === currentUserName;

        const statusText = is_topup
          ? "Topup"
          : isIncoming
          ? "Incoming"
          : "Outgoing";

        const Icon = isIncoming ? ArrowDownLeft : ArrowUpRight;

        return (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-medium",
              isIncoming
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            )}
          >
            <Icon className="w-4 h-4" />
            {statusText}
          </span>
        );
      },
    },
    {
      accessorKey: "cause",
      header: () => (
        <div className="flex items-center gap-1">
          <CauseIcon className="w-4 h-4 text-gray-500" />
          <span>Description</span>
        </div>
      ),
    },
    {
      accessorKey: "created_at_time",
      header: "Created At",
      cell: ({ row }) =>
        new Date(row.original.created_at_time * 1000).toLocaleString(),
    },
  ];

  return columns;
};
