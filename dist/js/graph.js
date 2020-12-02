$(document).ready(function(){
    $.getJSON("dist/js/include.json",function(data){
        console.log(data);

        //男女のデータをdanjyoに格納
        var danjyo=[];
        for(var sex in results)
        {
            danjyo.push(results[sex].gender);
        }
        console.log(danjyo);
        
        //円グラフを作成
        var ctx = document.getElementById('stage').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'pie',
 
        // データを指定
        data: {
         labels:"",
         datasets: [{
             label: '男女比',
             borderColor: 'rgb(75, 192, 192)',
             fill: false,
             data: danjyo,
         }]
        },
 
        // 設定はoptionsに記述
        options: {
        //タイトル
         title: {
         display: true,
         text: '線グラフの例'
            }   
        }
        });

    });
});