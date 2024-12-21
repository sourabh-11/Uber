const http=  require('http');
const app = require('./App')
const port = process.env.PORT || 3000





app.get('/',(req,res)=>{
    res.send("heloo")
})


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
