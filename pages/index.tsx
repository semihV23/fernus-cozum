import data from "../data/yayinlar.json";

console.log(data);

var li_string = "";
data.forEach((element) => (li_string += `<li><a href="yayinlar/${element.domain}">${element.isim}</a></li>`));

export default function Home() {
  return (
    <main className="p-5 text-slate-200">
      <div className="container mx-auto">
        <p className="font-semibold text-2xl">Yayınlar</p>
        <hr />
        <ul dangerouslySetInnerHTML={{ __html: li_string }}></ul>
      </div>
    </main>
  );
}
