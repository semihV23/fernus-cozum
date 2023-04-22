import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Listele() {
  const router = useRouter();

  const [liste, setListe] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      fetch(`https://${router.query["domain"]}/mobile_solved/mobile_watch.php?action=${router.query["type"]}&id=${router.query["id"]}`)
        .then((data) => data.json())
        .then((data_json) => setListe(data_json))
        .catch((err) => {
          setFetchError(true);
        });
    }
  }, [router.isReady]);

  function ListCompanenet() {
    if (router.isReady) {
      if (router.query["type"] == "source_list" && liste["sources"]) {
        return (
          <div>
            <p className="font-semibold italic">{liste["nm"]}</p>
            <ul>
              {liste["sources"].map((data) => (
                <li key={data["id"]}>
                  <a href={`listele?domain=${router.query["domain"]}&type=${data["parent"] == "true" ? "source_list" : "content_list"}&id=${data["id"]}`}>{data["nm"]}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      } else if (router.query["type"] == "content_list" && liste["contents"]) {
        return (
          <div>
            <p className="font-semibold italic">{liste["nm"]}</p>
            <ul>
              {liste["contents"].map((data) => (
                <li key={data["id"]}>{data["nm"]}</li> // state ile veriyi al sağ tarafta videoyu oynat
              ))}
            </ul>
          </div>
        );
      } else if (fetchError) {
        return (
          <p>
            Aradığın sayfa bulunamadı. Sayfayı yenile veya ana sayfaya dönmek için <a href="/">tıkla.</a>
          </p>
        );
      } else {
        return "Yükleniyor...";
      }
    }
  }

  return <ListCompanenet />;
}
