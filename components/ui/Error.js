import H1 from "@/components/ui/H1";
import P from "@/components/ui/P";

function Error({ error }) {
  return (
    <div className="flex flex-col  items-center py-32 md:px-32 ">
      <H1>Error Occurs</H1>
      <P>{error.message}</P>
    </div>
  );
}

export default Error;
