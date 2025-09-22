import creatApp from "./app";

const port = process.env.PORT
const app = creatApp();

app.listen(port, ()=>{
    console.log(`Server running at port: http://localhost:${port}`)
});
