var result=[
{"count":'',"tip":'六勃红'},
{"count":'',"tip":'六勃黑'},
{"count":'',"tip":'状元插金花'},
{"count":'',"tip":'五子登科'},
{"count":'',"tip":'状元'},
{"count":'',"tip":'对堂'},
{"count":'',"tip":'四进'},
{"count":'',"tip":'三红'},
{"count":'',"tip":'二举'},
{"count":'',"tip":'一秀'},
{"count":'',"tip":'未中奖'}
];
var resultcount=[0,0,0,0,0,0];

var dicefun = {
	init:function(){
		resultcount=[0,0,0,0,0,0];
		var container = document.getElementById('dicebox');
		$('.redpacket').remove();
		var arr = this.fetchdata();
		var result = this.showresult(arr);
		for (var i=0; i<arr.length;i++) {
			container.appendChild(this.createDice(arr[i],i));
		}
		
		$("#result").html(result.tip+" "+result.count);
		$(".btn").attr("data-status",'s0');
		
	},
	fetchdata:function(){//中奖结果
		/*var arr = [3,3,3,3,3,3]*/
		var arr = [];
		for (var i = 0 ; i<6;i++ ) {
			arr.push(Math.floor(Math.random()*6 + 1));
		}
		return arr;
	},
	createDice:function(num,i){
		var image = document.createElement('img');
   		  	image.setAttribute("class","redpacket");
   		  	image.id = "redpacket" + i;
    	  	image.src = 'img/' + num +'.jpg';
    	  	image.setAttribute("data-count",num);
    	  	return image;
	},
	showresult:function(arr){
		console.log(arr)
		for (var i = 0 ; i<arr.length;i++ ) {
			resultcount[arr[i]-1]=resultcount[arr[i]-1]+1;
		}
		console.log(resultcount);
		
		if(resultcount.indexOf(6)==-1){
			if(resultcount.indexOf(5)==-1){
				if(resultcount.indexOf(4)==-1){
					if(resultcount.indexOf(3)==-1){
						if(resultcount[3]==1){//一秀
							return result[9]
						}else if(resultcount[3]==2){//二举
							return result[8]
						}else{//没中
							return result[10]
						}
						
					}else{
						var thiscount=0;
						for(var i=0;i<resultcount.length;i++){
							if(resultcount[i]==3){
								thiscount++;
							}
						}
						if(thiscount==2){//对堂
							return result[5]
						}else{
							if(resultcount[3]==3){//三红
								return result[7]
							}else if(resultcount[3]==2){//二举
								return result[8]
							}else if(resultcount[3]==1){//一举
								return result[9]
							}else{//没中
								return result[10]
							}
						}
					}
				}else{
					if(resultcount[3]==4){
						if(resultcount[0]==2){//状元插金花
							return result[2]
						}else{//状元
							return result[4]
						}
					}else{//四进
						return result[6]
					}
				}
			}else{//五子
				return result[3];
			}
		}else{
			if(resultcount[3]==6||resultcount[0]==6){//6红
				return result[0]
			}else{//6黑
				return result[1]
			}
		}
		
		return result[10];
		
	}
}
