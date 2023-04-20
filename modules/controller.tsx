function get_source(source_id: number, yayinci_domain: string, kitap_menu: HTMLElement) {
  fetch(`https://${yayinci_domain}/mobile_solved/mobile_watch.php?action=source_list&id=${source_id}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      kitap_menu.innerHTML = JSON.stringify(data);
      var item_list_li = "";
      interface Sources {
        nm: string;
      }
      data["sources"].forEach((element: Sources) => {
        console.log(element["nm"]);
        item_list_li = item_list_li + `<li>${element["nm"]}</li>`;
      });
      kitap_menu.innerHTML = `<ul>${item_list_li}</ul>`;
    });
}

export { get_source };
