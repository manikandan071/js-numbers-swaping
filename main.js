var nos=123456;
var result=0;
var x=1;

while(nos!=0){  
	var dg=nos%10;   //dg=6;  dg=4;  dg=2;
	
	var dg1=((nos-dg)/10)%10;	 //dg1=5;  dg1=3;  dg1=1;
		
	result+=x*(10*dg+dg1);    //result=65;  result=4365;  result=214365;
	
	nos=Math.floor(nos/100);    //nos=1234;  nos=12;  nos=0;(n=0 contition false)
	
	x*=100;    //x=100;  x=10000;  x=1000000;
	
}
console.log(result);