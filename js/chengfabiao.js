function caculate(n,m,k){
	var result=[];
	var p=0;
	var a=[];
	for(var i=0;i<n;i++){
		a[i]=[];
		for(var j=0;j<m;j++){
			a[i][j]=(i+1)*(j+1);
			if(i<=j){
				result[p]=a[i][j];
				p++;
			}
		}
	}
	console.log(result[k-1]);
}