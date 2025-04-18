var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name; // similar java
        this.id = id;
    }
    return UserAccount;
}());
function main() {
    var user = new UserAccount("Aaryan", 1); // User user = new UserAccount("Aaryan", 1);
    var user2 = new UserAccount("Kirti", 2);
    console.log(user.name, user2.name);
}
main();
