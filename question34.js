function fname(aaa){
    //var $name=aaa.substring(aaa.lastIndexof("."));
    // var re = /(?:\.([^.]+))?$/;
    // var ext = re.exec(aaa)[1]; //拡張子
    // console.log(ext)

   //match = aaa.match(/[^/]+$/);
  filename = aaa.match(/([^/]*)\./)[1];
  extend = aaa.match(/[^.]+$/);

  console.log('filename = ' + filename);      // filename
  console.log('extend   = ' + extend);        // jpg

  alert("ファイル名は「"+filename+"」、拡張子は「"+extend+"」です。")

}