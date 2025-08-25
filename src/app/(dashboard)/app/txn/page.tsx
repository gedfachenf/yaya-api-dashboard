import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { SearchParamsI } from "@/interfaces/app";
import { getTxns } from "@/actions/txn.service";
import TxnListingPage from "@/components/features/txn/txn-tables/txns-listing";

export const metadata = {
  title: "Transactions",
};

type pageProps = {
  searchParams: Promise<SearchParamsI>;
};

export default async function Page(props: pageProps) {
  const searchParams = await props.searchParams;
  const { page, limit, search } = searchParams;
  // Showcasing the use of search params cache in nested RSCs

  const filters = {
    page,
    limit,
    search,
  };

  const res = await getTxns(filters);
  if (!res.success) {
    return <div>Error: {res.data.message}</div>;
  }

  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Transactions"
            description="Manage your transactions"
          />
        </div>
        <TxnListingPage paginatedData={res.data} />
      </div>
    </PageContainer>
  );
}
