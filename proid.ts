interface User {
  username: string;
}

function createUser(username: string): User {
  return { username };
}

// Usage
const user = createUser("Antonette");
