function fetchItems(): Promise<string[]> {
  var items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
var res = fetchItems();
