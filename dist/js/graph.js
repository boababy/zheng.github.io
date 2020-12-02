//男女比
$(document).ready(function(){
    $.getJSON("dist/js/include.json", function (data) {
        var male = $.grep(data, function (n, i) {
            return n.gender == '男'
        });
        console.log(male.length)

        var female= $.grep(data, function (n, i) {
            return n.gender == '女'
        });

        console.log(female.length)

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
        console.log(syusa.length)

        var katyou= $.grep(data, function (n, i) {
            return n.position == '課長'
        });

        console.log(katyou.length)

        var dairi= $.grep(data, function (n, i) {
            return n.position == '課長代理'
        });

        console.log(dairi.length)

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
        console.log(y11.length)

        var y12= $.grep(data, function (n, i) {
            return n.hireday == '2012-04-01'
        });

        console.log(y12.length)

        var y15= $.grep(data, function (n, i) {
            return n.hireday == '2015-04-01'
        });

        console.log(y15.length)

        var y16= $.grep(data, function (n, i) {
            return n.hireday == '2016-04-01'
        });

        console.log(y16.length)

        var y18= $.grep(data, function (n, i) {
            return n.hireday == '2018-04-01'
        });

        console.log(y18.length)


        var hiredayData={
            datasets: [{
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