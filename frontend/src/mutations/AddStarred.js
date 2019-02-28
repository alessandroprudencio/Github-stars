export function AddStarred(clientMutationId, starrableId){
    return `
    mutation AddSaPorra { 
        addStar(input:{
         starrableId:${starrableId}
         clientMutationId:${clientMutationId}
       }) {
          clientMutationId
         starrable {
           id
         }
        }
       }
    `
}