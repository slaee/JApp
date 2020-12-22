!function (execute) {
    function AppSystem(worker) {
        
        for (; worker.length; ) {
            worker.shift()();
            // const fn = worker.shift();
            // var obj = new fn();
        }
    }

    AppSystem(execute);
}([function () {
    
}, function () {

}, function () {
    window.app = document.body;

    setTimeout(function () {
        app.classList.remove("loading", "splash");
    }, 7000)
    document.addEventListener("deviceready", (function(){
        
    }),false);
}]);
