export function dadosStars(nome)  {  
 return ` { 
    user(login:"${nome}") { 
        starredRepositories(first:5) {
        nodes {
            id
            nameWithOwner
            owner {
                avatarUrl
              }
        stargazers(first:40) {
        totalCount
        }
            description
        }

        }
    }
    }`

}
