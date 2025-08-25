"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Minus,
  Calendar,
  CreditCard,
  User,
  DollarSign,
  Receipt,
  MessageSquare,
} from "lucide-react";
import { TxnI } from "@/interfaces/txn";
import { Button } from "@/components/ui/button";

interface TransactionModalProps {
  transaction: TxnI;
  currentUser: string;
}

export function TransactionModal({
  transaction,
  currentUser,
}: TransactionModalProps) {
  // Determine if transaction is incoming
  const isIncoming =
    transaction.receiver.name === currentUser || transaction.is_topup;

  // Format date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Format currency
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="hover:cursor-pointer">
          <div className="font-medium">{transaction.id}</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div
              className={`p-2 rounded-full ${
                isIncoming
                  ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  : "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
              }`}
            >
              {isIncoming ? (
                <ArrowDownLeft className="h-5 w-5" />
              ) : (
                <ArrowUpRight className="h-5 w-5" />
              )}
            </div>
            <div>
              <div className="text-lg font-semibold">
                {transaction.is_topup
                  ? "Top-up"
                  : isIncoming
                  ? "Incoming Payment"
                  : "Outgoing Payment"}
              </div>
              <div className="text-sm text-muted-foreground font-normal">
                Transaction ID: {transaction.id}
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Amount Section */}
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              {isIncoming ? (
                <Plus className="h-6 w-6 text-green-600 dark:text-green-400" />
              ) : (
                <Minus className="h-6 w-6 text-red-600 dark:text-red-400" />
              )}
              <span
                className={`text-3xl font-bold ${
                  isIncoming
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {transaction.amount_with_currency}
              </span>
            </div>
            <Badge
              variant={isIncoming ? "default" : "secondary"}
              className="text-xs"
            >
              {transaction.currency}
            </Badge>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <div className="font-medium">From</div>
                <div className="text-sm text-muted-foreground">
                  {transaction.sender.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  Account: {transaction.sender.account}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <div className="font-medium">To</div>
                <div className="text-sm text-muted-foreground">
                  {transaction.receiver.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  Account: {transaction.receiver.account}
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <div className="font-medium">Date & Time</div>
                <div className="text-sm text-muted-foreground">
                  {formatDate(transaction.created_at_time)}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <div className="font-medium">Description</div>
                <div className="text-sm text-muted-foreground">
                  {transaction.cause}
                </div>
              </div>
            </div>

            {/* Captions */}
            {(transaction.sender_caption || transaction.receiver_caption) && (
              <>
                <Separator />
                <div className="space-y-2">
                  {transaction.sender_caption && (
                    <div className="flex items-start gap-3">
                      <Receipt className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium">Sender Note</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.sender_caption}
                        </div>
                      </div>
                    </div>
                  )}
                  {transaction.receiver_caption && (
                    <div className="flex items-start gap-3">
                      <Receipt className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium">Receiver Note</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.receiver_caption}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Fee Information */}
            {transaction.fee > 0 && (
              <>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div className="font-medium">Fee Breakdown</div>
                  </div>

                  <div className="ml-8 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Fee (before VAT)
                      </span>
                      <span>
                        {formatCurrency(
                          transaction.fee_before_vat,
                          transaction.currency
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">VAT</span>
                      <span>
                        {formatCurrency(
                          transaction.fee_vat,
                          transaction.currency
                        )}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total Fee</span>
                      <span>
                        {formatCurrency(transaction.fee, transaction.currency)}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Amount Breakdown */}
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <div className="font-medium">Amount Breakdown</div>
              </div>

              <div className="ml-8 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Transaction Amount
                  </span>
                  <span>
                    {formatCurrency(transaction.amount, transaction.currency)}
                  </span>
                </div>
                {transaction.amount_in_base_currency !== transaction.amount && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Amount in Base Currency
                    </span>
                    <span>
                      {formatCurrency(
                        transaction.amount_in_base_currency,
                        "USD"
                      )}
                    </span>
                  </div>
                )}
                {transaction.fee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee</span>
                    <span>
                      {formatCurrency(transaction.fee, transaction.currency)}
                    </span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total {isIncoming ? "Received" : "Sent"}</span>
                  <span
                    className={
                      isIncoming
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }
                  >
                    {isIncoming ? "+" : "-"}
                    {formatCurrency(
                      transaction.amount + (isIncoming ? 0 : transaction.fee),
                      transaction.currency
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
