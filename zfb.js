// 文档地址：https://docs.hamibot.com/ 
console.show();
auto.waitFor();
console.setTitle("自动任务");
console.setPosition(device.width / 3, 0)
console.setSize(device.width / 3, device.height / 3)
var bounds
var centerX
var centerY
var right
var InitialValue = null
//提取数字
function jstime(textObj) {
    if (textObj == null) {
        return null
    }
    // 存储初始文本内容
    var initText = textObj.text();
    // log(initText)
    //获取时间
    var match = initText.match(/\d+/g);
    return match ? parseInt(match[0]) : null;
}
//提取坐标中心
function getXy(obj) {
    if (obj == null) {
        return null;
    }
    var bounds = obj.bounds();
    return {
        centerX: (bounds.left + bounds.right) / 2,
        centerY: (bounds.top + bounds.bottom) / 2
    };
}

//点击坐标中心
function clickCenter(params) {
    var center = getXy(params);
    if (center == null) {
        console.log('没找到')
        return
    }
    click(center.centerX, center.centerY);
    console.log('点击坐标')
}
function clickParentIfClickable(widget) {
    if (InitialValue == null) {
        InitialValue = widget
    }
    if (widget === null) {
        console.log('找不到');
        InitialValue = null
        return null;  // 终止递归的条件：如果 widget 是空值，则结束递归
    }
    if (widget.click()) {
        console.log('已点击');
        InitialValue = null
        return true;  // 点击控件
    }
    var parentWidget = widget.parent();  // 获取控件的父类
    if (parentWidget === null) {
        console.log('不可点击');
        clickCenter(InitialValue)
        InitialValue = null
        return false;
    }
    return clickParentIfClickable(parentWidget);
    // 递归调用自身，传入父类控件进行下一次查找和点击
}
if (auto.service == null) {
        log("请先开启无障碍服务！");
    } else {
        log("无障碍服务已开启");
        home()
        sleep(1000)
        launch("com.eg.android.AlipayGphone");
        clickParentIfClickable(text('视频').findOne())
        // sleep(1500)
    }
obj=className("android.widget.FrameLayout").depth(0).findOne().bounds()
x=(obj.left + obj.right) / 2
y=(obj.top + obj.bottom) / 2
a=1
do{
 swipe(x, y+y/2, x, y/6, 350)
  //swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2, 400)
  num=random(3, 7)
  console.log('第'+(a++)+'个视频看'+num+'秒')
  sleep(1000*num)
}while(!text('明日可领').exists())
clickParentIfClickable(text('明日可领').findOne())
text("看视频").waitFor()
while(clickParentIfClickable(text('去看看').findOne(2000))!=null)
{
  if(textStartsWith("浏览").findOne(2000))
  {
    num=jstime(textStartsWith("浏览").findOne())
do
{
  while(num==jstime(textStartsWith("浏览").findOne()))
{
sleep(1000)
}
  do{
  swipe(x, y+y/2, x, y/6, 350)
  sleep(1000)
  old=num
  num=jstime(textStartsWith("浏览").findOne())
  }while(old==num)
}while(!textStartsWith("再看").exists())
  back()
  }
else if(textStartsWith("再看").findOne(2000)){
    num=jstime(textStartsWith("再看").findOne())
do
{
  while(num==jstime(textStartsWith("再看").findOne()))
{
sleep(1000)
}
  do{
  swipe(x, y+y/2, x, y/6, 350)
  sleep(1000)
  old=num
  num=jstime(textStartsWith("再看").findOne())
  }while(old==num)
}while(!(text("明日再来").exists()||text("已领完").exists()))
  back()
  }
}
    
// clickParentIfClickable(text('去看看').findOne())
// textStartsWith("浏览").findOne()
// num=jstime(textStartsWith("再看").findOne())
// do
// {
//   while(num==jstime(textStartsWith("再看").findOne()))
// {
// sleep(1000)
// }
//   do{
//   swipe(x, y+y/2, x, y/6, 350)
//   sleep(1000)
//   old=num
//   num=jstime(textStartsWith("再看").findOne())
//   }while(old==num)
// }while(!(text("明日再来").exists()||text("已领完").exists()))



  
  
  
  
  
  
  
  
