// Эхлээд хэрэглэгчээс тоон утга авснаа number луу хөрвүүлэх

// Кноп дарах үед хэрэглчийн утга арилаад тоолуур ажилж эхэлнэ.


// second 3600 хуваагаад шал аар авахад цаг гарж ирнэ.

// цагаа 3600 үржүүлээд үндсэн тооноос хасаад гарсан хариуг 60 хуваагаад шалаар нь авсан нь минут байнаа.

// Үндсэн тооноос цаг минутаа секундэд шилжүүлээд хасхад үлдэгдэл нь секунд болно.


// Кноп дарах үед цаг минут секунд хэвлэгдээд дараа нь секундыг интервалаар секундыг 1 ээр хасаад цаг минут сек хэвлэнэ


// Секунд 0оос бага -1 болхоп 59 эхлээд болох үед минут 1 ээр хасагдана  болох минут 0 болох үед цаг 
// бүгд 0 болох үед интервал зогсоно.Мэдээлэлийн хэсэг гарж ирнэ.
var hour=0
var minut=0
var second=0
function printTime(){
    if(hour<10){
        hr.textContent='0'+hour
    } else{
        hr.textContent=hour
    }
    if(minut<10){
        min.textContent='0'+minut
    } else{
        min.textContent=minut
    }
    if(second<10){
        sec.textContent='0'+second
    } else{
        sec.textContent=second
    }
}
clock=null;
function countDown() {
    second-=1;
    if(second<0){
        second=59;
        minut-=1;
        if(minut<0){
            minut=59;
            hour-=1;
            if(hour<0){
                clearInterval(clock);
                inputNumber.style.display=null;
                counter.style.display="none"
                number.value=""
            }else {
                printTime();
            }
        } else {
            printTime();
        }
    }else {
        printTime();
    }
}
btn.addEventListener("click",function(){
    if(number.value!==""){
        var allSeconds=document.getElementById("number").value;
        allSeconds=Number(allSeconds);     
        inputNumber.style.display="none";
        counter.style.display="block";
         hour=Math.floor(allSeconds/3600);
         minut=Math.floor((allSeconds-hour*3600)/60);
         second=allSeconds-hour*3600-minut*60
        printTime();
       clock=setInterval(countDown,1000)
    }
})