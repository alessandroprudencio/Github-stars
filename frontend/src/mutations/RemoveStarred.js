export function RemoveStarred(clientMutationId, starrableId){
    return `
    mutation removendoSaPorra { 
        removeStar(input:{
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