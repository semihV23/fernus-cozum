import { useRouter } from "next/router";
import { get_source } from "../../modules/controller";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [liste, setListe] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (router.query.all) {
      console.log(router.query.all);
      console.log(router);
      fetch(`https://${router.query.all[0]}/mobile_solved/mobile_watch.php?action=source_list&id=${router.query.all[router.query.all.length - 1]}`)
        .then((data) => data.json())
        .then((data_json) => setListe(data_json))
        .catch((err) => {
          setFetchError(true);
        });
    }
  }, [router.query.all]);

  function ListCompanenet() {
    if (router.query.all && router.asPath) {
      if (liste["sources"]) {
      } else if (liste["contents"]) {
      }
    }
    return <p>Merhaba</p>;
  }

  return (
    <main className="p-5 text-slate-200">
      <div className="container mx-auto">
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3">
          <div className="col-span-1">
            <div id="kitap-menu" className="my-5">
              <ul>
                {/* {liste["sources"] &&
                  router.query.all &&
                  router.asPath &&
                  liste["sources"].map((data) => (
                    <li key={data["id"]}>
                      <a href={`${router.asPath}/${data["id"]}`}>{data["nm"]}</a>
                    </li>
                  ))} */}
                {/* {liste["sources"] && router.query.all && router.asPath
                  ? liste["sources"].map((data) => (
                      <li key={data["id"]}>{data["parent"] == "true" ? <a href={`${router.asPath}/${data["id"]}`}>{data["nm"]}</a> : <a href={`${router.asPath}/${data["id"]}`}>{data["nm"]}</a>}</li>
                    ))
                  : liste["contents"] && router.query.all && router.asPath
                  ? "Contents"
                  : "Yükleniyor..."} */}
              </ul>
              {fetchError && (
                <p>
                  Aradığın sayfa bulunamadı. Sayfayı yenile veya ana sayfaya dönmek için <a href="/">tıkla.</a>
                </p>
              )}
              <ListCompanenet />
            </div>
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
