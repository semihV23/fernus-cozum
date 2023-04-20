import { get_source } from "@/modules/controller";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <main className="p-5 text-slate-200">
      <div className="container mx-auto">
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3">
          <div className="col-span-1">
            <p className="text-2xl font-bold  mb-5">Yayınlar</p>
            <div id="kitap-menu" className="my-5"></div>
            <button className="rounded-md bg-cyan-600 px-4 py-2 font-semibold" onClick={() => get_source(5, "bilgisarmal.frns.in", document.getElementById("kitap-menu")!)}>
              Tıkla bana!
            </button>
          </div>
          <div className="col-span-2">
            <div className="outline w-fit ">
              <img className="h-full" src="https://cdn2.thecatapi.com/images/bsp.jpg" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
