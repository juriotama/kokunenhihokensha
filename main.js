$(function(){

    $("#calc").on("click", function(){
        let koseinenkin;
        let hihuyou;
        let age;
        let addressJp;
        let hasJapan;
        let birthday;
        let jukyu;
        let result;
        koseinenkin = $("#koseinenkin").prop("checked");
        hihuyou = $("#hihuyou").prop("checked");
        age = $("#age").val();
        addressJp = $("#addressJp").prop("checked");
        hasJapan = $("#hasJapan").prop("checked");
        birthday = $("#birthday").prop("checked");
        jukyu = $("#jukyu").prop("checked");

        // console.log(koseinenkin);
        // console.log(hihuyou);
        // console.log(age);
        // console.log(addressJp);
        // console.log(hasJapan);
        // console.log(birthday);
        // console.log(jukyu);
        if(koseinenkin && (!(age>=65 && jukyu))){
            console.log("2号");
            result="2号"
        }else if(hihuyou && (age>=20 && age<60)){
            console.log("3号");
            result="3号"
        }else{
            if((age>=20 && age<60) && !jukyu && addressJp){
                console.log("1号");
                result="1号"
            }else if(addressJp && age>=20 && age<65){
                console.log("任意");
                result="任意"
            }else if(!addressJp && age>=20 && age<65 && hasJapan){
                console.log("任意");
                result="任意"
            }else if(age>=65 && age<70 && (addressJp || hasJapan) && birthday && !jukyu){
                console.log("特例任意");
                result="特例任意"
            }else{
                console.log("被保険者ではない");
                result="被保険者ではない"
            }
        }

        $("#result").text(result);
    });
});