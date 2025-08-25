import { getTxns } from "@/actions/txn.service";
import { FinancialDashboard } from "@/components/features/dashboard/financial-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "YaYa Moniter",
};

export default async function DashboardPage() {
  const res = await getTxns({});
  if (!res.success) {
    return <div>Error: {res.data.message}</div>;
  }

  return (
    <>
      <FinancialDashboard
        data={{
          incomingSum: res.data.incomingSum,
          outgoingSum: res.data.outgoingSum,
          total: res.data.total,
        }}
      />
    </>
  );
}
