export function DataUserQuery(login) {
    return `{
     user(login:"${login}") { 
        name
        login
        avatarUrl
        email
        location
        url
        bio
        }
   }
    `
}