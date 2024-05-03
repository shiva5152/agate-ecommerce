import ListProducts from "@/components/agate/ListProducts";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ListProducts />
      </div>
    </main>
  );
}
