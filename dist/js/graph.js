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

        console.log(two.length);
        console.log(three.length);
        console.log(four.length);
        console.log(fi.length);

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

            var two = [];
            var three = [];
            var four = [];
            var fi = [];

        if($.grep(data, data.division == 'ITI')){

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
        }
            console.log(two.length);
            console.log(three.length);
            console.log(four.length);
            console.log(fi.length);
            
            

            
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