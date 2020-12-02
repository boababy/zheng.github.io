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