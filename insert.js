const {MongoClient}=require('mongodb')
const MONGO_URL="mongodb://localhost:27017"
console.log("hello")
MongoClient.connect(MONGO_URL,(err,client)=>{
    if (err) throw err;
    const tododb=client.db("tododb")
    const todos=tododb.collection("todos")
    todos.insert({
        task:"task1",
        priority:3,
        owner:"admin"
    },(err,result)=>{
        if(err) throw err;
        console.log(result)
    })
})

