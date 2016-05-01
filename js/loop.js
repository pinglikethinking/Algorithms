var judge=function(str){
	var arr=str.split(""),
		L=arr.length,
		first=0,
		bgineC=0,
		bgineNum=0;
	//判断是哪种命名方式
	if(arr[0]==="R"&&!isNaN(arr[1])){
		first++;
		for(var i=0;i<L;i++){
			if(arr[i]==="C"){
				first++;
				bgineC=i;
				break;//跳出循环
			}
		}
	}
	for(var i=L-1;i>=0;i--){
		if(isNaN(arr[i])){
			bgineNum=i+1;
			break;//跳出循环
		}
	}
	if(first===2){
		//第二种命名方式RxCy
		var num=arr.slice(bgineC+1).join("");
		var A=NumToA(num);
		var A2=arr.slice(1,bgineC);
		console.log(A.concat(A2).join(""));
	}else{
		//第一种命名方式BC53
		var Str=arr.slice(0,bgineNum).join("");
		var num2=AtoNum(Str);
		var num1=arr.slice(bgineNum);
		num1.unshift("R");
		num1.push("C");
		num1.push(num2);
		console.log(num1.join(""));
	}
	
};
/*
A-->1
AA-->27=1*26^1+1*26^0
AAA-->1*26^2+1*26^1+1*26^0
ABC-->1*26^2+2*26^1+3*26^0
 */
function AtoNum(Str){
	var a=0;
	var num=0;
	var L=Str.length-1;
	for(var i=0;i<Str.length;i++){
		a=Str.charCodeAt(i)-64;
		num+=a*Math.pow(26,L);//JS幂运算
		L--;
	}
	return num;
}
/*
相当于十进制变二十六进制，然后加64得A
 */
function NumToA(num){
	var a=0;
	var str=[];
	while(num>0){
		a=(num%26)+64;
		str.push(String.fromCharCode(a));//将ascall值转为字母推进数组
		num=parseInt(num/26);
	}
	str.reverse();//数组的反排序
	return str;
}