app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);
initCronJob();
let port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log('app run on ${port}');
});