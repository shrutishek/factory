// // function 2
function iphone1(asin,color,display,camera){
    let obj={};

    obj.asin=asin;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;

    obj.dial = function(){
        console.log("tring.. tring...")
    }

    obj.sendMessage = function(){
        console.log("Sending message...")
    }

    obj.cameraClick = function(){
        console.log("Camera clicked")
    }

    return obj;
}


function iphone2(asin,color,display,camera,bluetooth){
    let iphone2Obj =iphone1(asin,color,display,camera);
    iphone2Obj.bluetooth=bluetooth;

    return iphone2Obj;
}

let s1 = iphone2("B08Z5NYG12","yellow",6,"48 MP",false);
console.log(s1);