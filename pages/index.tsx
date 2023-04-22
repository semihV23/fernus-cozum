import data from "../data/yayinlar.json";

export default function Home() {
  return (
    <main className="p-5 text-slate-200">
      <div className="container mx-auto">
        <p className="font-semibold text-2xl">Yayınlar</p>
        <hr />
        <ul className="py-2">
          {data.map((yayin) => (
            <li key={yayin.id}>
              <a href={`yayinlar2/listele?domain=${yayin.domain}&type=source_list&id=${yayin.start_point}`}>{yayin.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
