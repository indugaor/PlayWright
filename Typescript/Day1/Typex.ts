interface User {
    name: string; //String name;
    id: number; // int id;
  }
  
  class UserAccount {
    name: string; // String name
    id: number; // int id
  
    constructor(name: string, id: number) { // UserAccount(String name, int id) {}
      this.name = name; // similar java
      this.id = id;
    }
  }
  
  function main() {
      const user: User = new UserAccount("Aaryan", 1); // User user = new UserAccount("Aaryan", 1);
      const user2: User = new UserAccount("Kirti", 2);
      
      console.log(user.name, user2.name);
  }
  
  main();