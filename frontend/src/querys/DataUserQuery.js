export function DataUserQuery(login) {
    return `{
     user(login:"${login}") { 
        name,
        avatarUrl
        email
        location
        url
        bio
        }
   }
    `
}