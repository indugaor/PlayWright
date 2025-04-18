var vendors1 = [
    { id: 3, name: "Naveen", lname: "Kumar", productName: "Watch", price: 600 },
    { id: 1, name: "Vishal", productName: "Airpods", price: 750 },
    { id: 2, name: "Ranjith", lname: "Kumar", productName: "Tv", price: 800 },
];
function sortvendors() {
    return vendors1.sort(function (a1, a2) { return a1.id > a2.id ? -1 : 1; });
}
sortvendors().forEach(function (e) {
    return console.log("Id ".concat(e.id, " name ").concat(e.name));
});
// It's show error certification issue
// function getFacts(url: string): Promise<Response> {
//     return fetch(url).then(res => res.json());
// }
// getFacts("https://cataas.com/cat?width=200;height=200;json=true").then(data => console.log(data));
