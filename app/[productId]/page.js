import { getAllItems } from "@/lib/items";
import { redirect } from "next/navigation";

// Be in sooorat in page ham static shod, harchand ke inja chon ma redirect kardim khob niazi nabood!
export async function generateStaticParams() {
  const items = await getAllItems();

  const ids = items.map((item) => ({ itemId: String(item.id) }));

  return ids;
}

function Page() {
  redirect("/");
  return <div></div>;
}

export default Page;
