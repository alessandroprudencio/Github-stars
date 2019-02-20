export function DataStarsQuery(nome) {
    return ` { 
    user(login:"${nome}") { 
        starredRepositories(first:100) {
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
