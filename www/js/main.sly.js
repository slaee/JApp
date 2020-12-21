!(function (execute) {
    
    function AppSystem(worker) {
        for (; worker.length; ) {
            const fn = worker.shift();
            var obj = new fn();
        }
        function onLoad(){
            document.addEventListener("deviceready", onDeviceReady, false);
        }
        return onLoad();
    }

    //Handle on device ready
    function onDeviceReady() {
        document.addEventListener("pause", AppSystem.onPause, false);
        document.addEventListener("resume", AppSystem.onResume, false);
        document.addEventListener("menubutton", AppSystem.onMenuKeyDown, false);
        document.addEventListener("backbutton", AppSystem.onBackKeyDown, false);
        //Add similar listeners for other events

        
        console.log(
            "Running cordova-" + cordova.platformId + "@" + cordova.version
        );

        // window.setTimeout(function(){
        //     document.getElementById("splash").style.display='none';
        // }, 5000);
        document.getElementById("splash").classList.add("loading");
        window.setTimeout(function(){
            document.getElementById("splash").classList.remove("loading");
        }, 5000);
        window.setTimeout(function(){
            document.getElementById("deviceready").classList.add("ready");
        }, 5000);
    }

    AppSystem.onPause = function () {
        // Handle the pause event
    };

    AppSystem.onResume = function () {
        // Handle the resume event
    };

    AppSystem.onMenuKeyDown = function () {
        // Handle the menubutton event
    };

    AppSystem.onBackKeyDown = function () {
        // Handle the back button
    };

    AppSystem(execute);
    
})([function () {

}, function () {

}, function () {

}]);
