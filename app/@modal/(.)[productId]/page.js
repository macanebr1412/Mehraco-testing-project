import ModalBackdrop from "@/components/modal/ModalBackdrop";
import ModalContent from "@/components/modal/ModalContent";
import ModalDialog from "@/components/modal/ModalDialog";
import { getAllItems, getItem } from "@/lib/items";

// Intori har title ke product ma dare moghe neshoon dadanesh be soorate modal mishe title page ma.
export async function generateMetadata({ params }) {
  const { title } = await getItem(params.productId);
  return { title };
}

async function Page({ params }) {
  const id = params.productId;
  const product = await getItem(id);

  return (
    <>
      <ModalBackdrop />
      <ModalDialog>
        <ModalContent product={product} />
      </ModalDialog>
    </>
  );
}

export default Page;
