"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon } from "lucide-react";

export function FinancialDashboard({
  data,
}: {
  data: {
    total: number;
    incomingSum: number;
    outgoingSum: number;
  };
}) {
  const dashboardData = {
    total: data.total,
    incomingSum: data.incomingSum,
    outgoingSum: data.outgoingSum,
    netBalance: data.incomingSum - data.outgoingSum,
  };
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Transactions
            </CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-montserrat text-foreground">
              {dashboardData.total}
            </div>
            <p className="text-xs text-muted-foreground mt-1">This period</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Incoming
            </CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-montserrat text-accent">
              ETB {dashboardData.incomingSum.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Outgoing
            </CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-montserrat text-destructive">
              ETB {dashboardData.outgoingSum.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Net Balance
            </CardTitle>
            <TrendingUpIcon
              className={`h-4 w-4 ${
                dashboardData.netBalance >= 0
                  ? "text-accent"
                  : "text-destructive"
              }`}
            />
          </CardHeader>
          <CardContent>
            <div
              className={`text-3xl font-bold font-montserrat ${
                dashboardData.netBalance >= 0
                  ? "text-accent"
                  : "text-destructive"
              }`}
            >
              ETB {dashboardData.netBalance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {dashboardData.netBalance >= 0 ? "Positive" : "Negative"} cash
              flow
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
