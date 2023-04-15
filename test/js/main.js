 // 使用AJAX从和风天气API获取天气数据
const xhr = new XMLHttpRequest();
const url = 'https://devapi.qweather.com/v7/weather/now?key=63f0cba177394ae58da1cb66fe7208a6';


// 3. 设置响应数据的数据类型
xhr.responseType = "json";

// 4. 发送请求
xhr.send();

// 5. 处理响应数据
xhr.onload = function() {
  if (xhr.status === 200) {
    var response = xhr.response;
    // 在这里可以对响应数据进行处理
    console.log(response);
  } else {
    console.log("请求失败：" + xhr.status);
  }
};


    
function displayDate(){
	document.getElementById('demo').innerHTML=Date();
}

function mytime(){
    var a = new Date();
    var b = a.toLocaleTimeString();
    var c = a.toLocaleDateString();
    document.getElementById("time").innerHTML = c+"&nbsp"+b;
    }
setInterval(function() {mytime()},1000); 