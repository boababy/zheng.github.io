function count(){
   
    var bm = prompt("誕生日の月を1～12で入力してください。","");
    var bd = prompt("誕生日の日を1～31で入力してください。","");
    var now = new Date();
    var birthday = new Date();

    birthday.setMonth(bm-1);
    birthday.setDate(bd);
    var ms = birthday.getTime() - now.getTime();
    if (ms <= 0){
        var by = birthday.getFullYear();
        birthday.setFullYear(by+1);
        ms = birthday.getTime() - now.getTime();
     }
    var days = ms / (24 * 60 * 60 * 1000);
    days = Math.ceil(days);
    alert("次の誕生日まで、あと" + days + "日です")
}