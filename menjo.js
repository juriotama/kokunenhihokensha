$(function(){

    $("#calc").on("click", function(){
        let result;
        let subresult;

        //チャレンジ内容　法定／それ以外
        if($("#charange1").prop("checked")){
            console.log("法定免除チャレンジ")
            //被保険者
            result = $("#hihokensha1").prop("checked");
            result *= !$("#sanzensango").prop("checked");
            result *= $("#shogaikiso").prop("checked") || $("#shogaikousei2").prop("checked") || $("#shogaikousei3").prop("checked") || $("#shogaikyu").prop("checked")
            || $("#seikatsuhogo1").prop("checked") || $("#shisetsu").prop("checked") ;
            if(result){
                alert("法定免除チャレンジ、成功！");
            }else{
                alert("法定免除チャレンジ、失敗！");
            }

        }else if($("#charange6").prop("checked")){
            console.log("猶予");
            result = $("#hihokensha1").prop("checked")||$("#hihokensha1").prop("checked");
            let shotoku = $("input#shotoku").val();
            let huyouNum = $("input#huyouNum").val();
            
            subresult = shotoku <= (huyouNum+1)*35+22;
            subresult = subresult ||
            $("#seikatsuhogo2").prop("checked")||
            ($("#shogaikafu").prop("checked") && $("input#shotoku").val()<125)||
            $("#tensai").prop("checked");

            result = result && subresult;
            result = result && $("#haigusha1").prop("checked");

            if(result){
                alert("納付猶予チャレンジ、成功！");
            }else{
                alert("納付猶予チャレンジ、失敗！");
            }
        }else if($("#charange7").prop("checked")){
            console.log("学生");
            result = $("#hihokensha1").prop("checked")||$("#hihokensha1").prop("checked");
            let shotoku = $("input#shotoku").val();
            let huyouNum = $("input#huyouNum").val();
            
            subresult = shotoku <= 118+38*huyouNum;
            subresult = subresult ||
            $("#seikatsuhogo2").prop("checked")||
            ($("#shogaikafu").prop("checked") && $("input#shotoku").val()<125)||
            $("#tensai").prop("checked");

            result = result && subresult;

            if(result){
                alert("学生納付特例チャレンジ、成功！");
            }else{
                alert("学生納付特例チャレンジ、失敗！");
            }            
        }else{
            console.log("法定免除以外");
            result = $("#hihokensha1").prop("checked")||$("#hihokensha1").prop("checked");
            
            let shotoku = $("input#shotoku").val();
            let huyouNum = $("input#huyouNum").val();
            let alertMsg = "申請免除チャレンジ";
            subresult =true;
            if(shotoku <= (huyouNum+1)*35+22){
                console.log("申請全額");
                alertMsg = "申請全額免除チャレンジ";
            }else if(shotoku <= 78+38*huyouNum){
                console.log("申請4分の3免除");
                alertMsg = "申請4分の3免除チャレンジ";
            }else if(shotoku <= 118+38*huyouNum){
                console.log("申請半額免除");
                alertMsg = "申請半額免除チャレンジ";
            }else if(shotoku <= 158+38*huyouNum){
                console.log("申請4分の1免除");
                alertMsg = "申請4分の1免除チャレンジ";
            }else{
                subresult = false;
            }

            subresult = subresult ||
            $("#seikatsuhogo2").prop("checked")||
            ($("#shogaikafu").prop("checked") && $("input#shotoku").val()<125)||
            $("#tensai").prop("checked");

            result = result && subresult;
            result = result && $("#haigusha1").prop("checked")&& $("#setainushi1").prop("checked");

            if(result){
                alert(alertMsg + "、成功！");
            }else{
                alert("申請免除チャレンジ、失敗！");
            }
        }

    });
});