function solution(relation) {
    var answer = 0;
    let rlen=relation.length;
    let clen=relation[0].length;
    const subset=[];
    const set=new Set();//인덱스 조합 
    function comb(cnt,max,start){
        if(cnt===max){
            // 최소성 확인 (인덱스 중복 검사)
            let minimum=true;
            let sarr=Array.from(set);
            for(let i=0;i<sarr.length;i++){
                let isContain=true;
                for(let j=0;j<sarr[i].length;j++){
                    if(subset.indexOf(sarr[i][j])===-1){
                        isContain=false;
                        break;
                    }
                }
                if(isContain){
                    minimum=false;
                    break;
                }
            }
            if(minimum){//유일성 확인
                const dict={};
                let isOnly=true;
                for(let i=0;i<rlen;i++){
                    let temp=relation[i].filter((item,idx)=>{
                        return subset.indexOf(idx)!==-1;
                    }).join(",");
                    if(dict[temp]===undefined){
                        dict[temp]=1;
                    }else{//유일하지 않음
                        isOnly=false;
                        break;
                    }
                }
                if(isOnly){
                    set.add([...subset]);
                }
            }
            
            return;
        }
        
        for(let i=start;i<clen;i++){
            subset.push(i);
            comb(cnt+1,max,i+1);
            subset.pop();
        }
    }
    
    for(let i=1;i<=clen;i++){
        comb(0,i,0);
    }
    
    return set.size;
}