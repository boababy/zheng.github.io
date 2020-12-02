$(document).ready(function(){
    $.getJSON("dist/js/include.json",function(results){
        console.log(results);

        //男女のデータをdanjyoに格納
        var danjyo=[];
        for(var sex in results)
        {
            danjyo.push(results[sex].gender);
        }
        console.log(danjyo);

        var female=[];
        var male=[];

        if(danjyo.value=="女"){
            female=danjyo.length
        }
        console.log(female);

        if(danjyo.value=="男"){
            male=danjyo.length
        }
        console.log(male);
        

        //円グラフを作成
        var ctx = document.getElementById('stage').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'pie',
 
        // データを指定
        data: {
         labels:["女","男"],
         datasets: [{
             label: '男女比',
             borderColor:['rgb(75, 192, 192)','rgb(255, 99, 132)'],
             fill: false,
             data: female,male,
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