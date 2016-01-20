var appRouter = function(app) {

app.get("/", function(req, res) {
    res.send("Welcome to ItemsService");
});

app.get("/items", function(req,res) {
    var items = [
	{"name": "bread"}, 
	{"name": "cheese"}, 
	{"name": "lettuce"}
	 ];

   return res.send(items);			
});

app.post("/items", function(req,res) {
	var item = req.body.item
	return res.send("item added" + req.body.item); 
});

}
module.exports = appRouter;
