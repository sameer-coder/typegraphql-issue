# mercurius-issue-458

# Steps to reproduce

1. Clone the repo then run npm install
2. Run npm start
3. Go to http://localhost:8080/playground
4. Paste this mutation into a tab
```
mutation (
  $name: String!
  $email: String!
) {
  createUser(
    name: $name
    email: $email
  ) {
    name,
    email
  }
}
```

```
# Variables
# In this example, name must be lowercase, alphabetic and not more than 50 characters
{
  "name": "abc",
  "email": "abc"
}
```
5. Run the mutation with some malformed email or name