//男女比
$(document).ready(function(){
    $.getJSON("dist/js/include.json", function (data) {
        var male = $.grep(data, function (n, i) {
            return n.gender == '男'
        });
        //console.log(male.length)

        var female= $.grep(data, function (n, i) {
            return n.gender == '女'
        });
        //console.log(female.length)

        var danjyoData={
            datasets: [{
                backgroundColor: [
                    "#BB5179",
                    "#FAFF67",
                ],
                data: [male.length,female.length]
            }],
            // これらのラベルは凡例とツールチップに表示されます。
            labels: [
                '男',
                '女'
            ]
        };
       // グラフを作成
       var ctx = document.getElementById("stage");
       var PieChart = new Chart(ctx, {
           type: 'pie', 
           data: danjyoData,
           options: {
            title: {
              display: true,
              text: '男女比'
            }
          }
        });
    });
});

//役職者の割合
$(document).ready(function(){
    $.getJSON("dist/js/include.json", function (data) {
        var syusa = $.grep(data, function (n, i) {
            return n.position == '主査'
        });
        //console.log(syusa.length)

        var katyou= $.grep(data, function (n, i) {
            return n.position == '課長'
        });
        //console.log(katyou.length)

        var dairi= $.grep(data, function (n, i) {
            return n.position == '課長代理'
        });
        //console.log(dairi.length)

        var danjyoData={
            datasets: [{
                backgroundColor: [
                    "#FAFF67",
                    "#58A27C",
                    "#3C00FF"
                ],
                data: [syusa.length,katyou.length,dairi.length]
            }],
            // これらのラベルは凡例とツールチップに表示されます。
            labels: [
                '主査',
                '課長',
                '課長代理'
            ]
        };
       // グラフを作成
       var ctx2 = document.getElementById("stage2");
       var PieChart2 = new Chart(ctx2, {
           type: 'pie', 
           data: danjyoData,
           options: {
            title: {
              display: true,
              text: '役職者比'
            }
          }
        });
    });
});

//入社数の推移
$(document).ready(function(){
    $.getJSON("dist/js/include.json", function (data) {
        var y11 = $.grep(data, function (n, i) {
            return n.hireday == '2011-04-01'
        });
        //console.log(y11.length)

        var y12= $.grep(data, function (n, i) {
            return n.hireday == '2012-04-01'
        });
        //console.log(y12.length)

        var y15= $.grep(data, function (n, i) {
            return n.hireday == '2015-04-01'
        });
        //console.log(y15.length)

        var y16= $.grep(data, function (n, i) {
            return n.hireday == '2016-04-01'
        });
        //console.log(y16.length)

        var y18= $.grep(data, function (n, i) {
            return n.hireday == '2018-04-01'
        });
        //console.log(y18.length)

        var hiredayData={
            datasets: [{
                label: '入社数の推移',
                borderColor: "rgba(255,0,0,1)",
                backgroundColor: "rgba(0,0,0,0)",

                data: [
                    y11.length,
                    y12.length,
                    y15.length,
                    y16.length,
                    y18.length]
                }],
            // これらのラベルは凡例とツールチップに表示されます。
                labels: [
                '2011-04-01',
                '2012-04-01',
                '2015-04-01',
                '2016-04-01',
                '2018-04-01'
                ]
            };

       // グラフを作成
       var ctx5 = document.getElementById("stage5");
       var lineChart = new Chart(ctx5, {
           type: 'line', 
           data: hiredayData,
           options: {
            title: {
                display: true,
                text: '入社数の推移'
              },
              scales: {
                yAxes: [{
                  ticks: {
                    suggestedMax: 14,
                    suggestedMin: 0,
                    stepSize: 2,
                  }
                }]
              },
          }
        });
    });
});


//年代別
$(document).ready(function(){
    $.getJSON("dist/js/include.json", function (data) {
        
        var two = [];
        var three = [];
        var four = [];
        var fi = [];

        for(var i=0;i<data.length;i++){
            var birth=data[i].birthday;
            var birthToNum=jsGetAge(birth);
            var str = birthToNum.toString().substring(0,1);
            switch(str){
             case '2' : two.push(birthToNum);break;
             case '3' : three.push(birthToNum);break;
             case '4' : four.push(birthToNum);break;
             case '5' : fi.push(birthToNum);break;
            }
        }

       // グラフを作成
       var ctx3 = document.getElementById("stage3");
       var PieChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: ['20代', '30代', '40代', '50代'],
          datasets: [
            {
              label: '人数',
              data: [two.length,three.length,four.length,fi.length],
              backgroundColor: "rgba(219,39,91,0.5)"
            }]
            },
            options: {
                title: {
                display: true,
                text: '年代別'
                },
                scales: {
                yAxes: [{
                ticks: {
                suggestedMax: 10,
                suggestedMin: 0,
                stepSize: 1,
                }
                }]
            },
        }
        });
    });
});

//部署ごとの年代別
$(document).ready(function(){
    $.getJSON("dist/js/include.json", function (data) {

        var two_i = [];
        var three_i = [];
        var four_i = [];
        var fi_i = [];

        var two_s = [];
        var three_s = [];
        var four_s = [];
        var fi_s = [];

        var two_w = [];
        var three_w = [];
        var four_w = [];
        var fi_w = [];

        $.each(data,function(k,v){
            //console.log(v);

            if(v.division == 'ITI'){
                //这里进行年龄判断操作
                    var birth=v.birthday;
                    var birthToNum=jsGetAge(birth);

                    var str = birthToNum.toString().substring(0,1);
                    switch(str){
                    case '2' : two_i.push(birthToNum);break;
                    case '3' : three_i.push(birthToNum);break;
                    case '4' : four_i.push(birthToNum);break;
                    case '5' : fi_i.push(birthToNum);break;
                    }
            }
            if(v.division == 'SMT'){
                //这里进行年龄判断操作
                    var birth=v.birthday;
                    var birthToNum=jsGetAge(birth);

                    var str = birthToNum.toString().substring(0,1);
                    switch(str){
                    case '2' : two_s.push(birthToNum);break;
                    case '3' : three_s.push(birthToNum);break;
                    case '4' : four_s.push(birthToNum);break;
                    case '5' : fi_s.push(birthToNum);break;
                    }
            }
            if(v.division == 'WEB'){
                //这里进行年龄判断操作
                    var birth=v.birthday;
                    var birthToNum=jsGetAge(birth);

                    var str = birthToNum.toString().substring(0,1);
                    switch(str){
                    case '2' : two_w.push(birthToNum);break;
                    case '3' : three_w.push(birthToNum);break;
                    case '4' : four_w.push(birthToNum);break;
                    case '5' : fi_w.push(birthToNum);break;
                    }
            }
        });

        /*
        console.log(two_i.length);
        console.log(three_i.length);
        console.log(four_i.length);
        console.log(fi_i.length);
        

        console.log(two_s.length);
        console.log(three_s.length);
        console.log(four_s.length);
        console.log(fi_s.length);
        

        console.log(two_w.length);
        console.log(three_w.length);
        console.log(four_w.length);
        console.log(fi_w.length);
        */

       var ctx4 = document.getElementById("stage4");
       var barChart = new Chart(ctx4, {
         type: 'bar',
         data: {
           labels: ['20代', '30代', '40代', '50代'],
           datasets: [
             {
               label: 'ITI',
               data: [two_i.length, three_i.length, four_i.length,fi_i.length],
               backgroundColor: "rgba(219,39,91,0.5)"
             },{
               label: 'SMT',
               data:[two_s.length, three_s.length, four_s.length,fi_s.length],
               backgroundColor: "rgba(130,201,169,0.5)"
             },{
               label: 'WEB',
               data:[two_w.length, three_w.length, four_w.length,fi_w.length],
               backgroundColor: "rgba(255,183,76,0.5)"
             }
           ]
         },
         options: {
           title: {
             display: true,
             text: '部署ごとの年代別'
           },
           scales: {
             yAxes: [{
               ticks: {
                 suggestedMax: 5,
                 suggestedMin: 0,
                 stepSize: 1,
               }
             }]
           },
         }
       });

    });
});


//年龄計算
function jsGetAge(strBirthday){       
    var returnAge;
    var strBirthdayArr=strBirthday.split("/");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];
    
    d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();
    
    if(nowYear == birthYear){
        returnAge = 0;//同年 则为0岁
    }
    else{
        var ageDiff = nowYear - birthYear ; //年之差
        if(ageDiff > 0){
            if(nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;//日之差
                if(dayDiff < 0)
                {
                    returnAge = ageDiff - 1;
                }
                else
                {
                    returnAge = ageDiff ;
                }
            }
            else
            {
                var monthDiff = nowMonth - birthMonth;//月之差
                if(monthDiff < 0)
                {
                    returnAge = ageDiff - 1;
                }
                else
                {
                    returnAge = ageDiff ;
                }
            }
        }
        else
        {
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }
    
    return returnAge;//返回周岁年龄
    
}
