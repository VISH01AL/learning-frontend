let xtrun=true;
const board=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
function boardfull(arr)
{
    var isfull=true;
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<arr.length;j++)
        {
            
            if(arr[i][j]==-1)
            {
                isfull=false;
                break;
            }
        }
    }
    console.log(board);
    console.log(isfull);
    return isfull;
}
function whowon(arr)
{
    var winx=true;
    var wino=true;
    for(var i=0;i<arr.length;i++)
    {
        winx=true;
        wino=true;
        for(var j=0;j<arr.length;j++)
        {
            if(arr[i][j]==1 || arr[i][j]==-1)
            {
                wino=false;
            }
            if(arr[i][j]==0 || arr[i][j]==-1)
            {
                winx=false;
            }
        }
        if(winx)
        {
            break;
        }
        if(wino)
        {
            break;
        }
    }
    if(winx)
    {
        return 1;
    }
    if(wino)
    {
        return 0;
    }
    winx=true;
    wino=true;
    for(var i=0;i<arr.length;i++)
    {
        winx=true;
        wino=true;
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j][i]==1 || arr[j][i]==-1)
            {
                wino=false;
            }
            if(arr[j][i]==0 || arr[j][i]==-1)
            {
                winx=false;
            }
        }
        if(winx)
        {
            break;
        }
        if(wino)
        {
            break;
        }
    }
    if(winx)
    {
        return 1;
    }
    if(wino)
    {
        return 0;
    }
    winx=true;
    wino=true;
    var i=0;
    var j=0;
    while(i<arr.length && j<arr.length)
    {
        if(arr[i][j]==1 || arr[i][j]==-1)
        {
            wino=false;
        }
        if(arr[i][j]==0 || arr[i][j]==-1)
        {
            winx=false;
        }
        i++;
        j++;
    }
    if(winx)
    {
        return 1;
    }
    if(wino)
    {
        return 0;
    }
    i=0;
    winx=true;
    wino=true;
    j=arr.length-1;
    while(i<arr.length && j<arr.length)
    {
        if(arr[i][j]==1 || arr[i][j]==-1)
        {
            wino=false;
        }
        if(arr[i][j]==0 || arr[i][j]==-1)
        {
            winx=false;
        }  
        i++;
        j--;
    }
    if(winx)
    {
        return 1;
    }
    if(wino)
    {
        return 0;
    }
    return -1;
}
function play0(){
play(0)
}
function play1(){
    play(1)
}
function play2(){
    play(2)
}
function play3(){
    play(3)
}
function play4(){
    play(4)
}
function play5(){
    play(5)
}
function play6(){
    play(6)
}
function play7(){
    play(7)
}
function play8(){
    play(8)
}

function change(input1,options,arr)
{
if(xtrun)
{
    options[input1].innerHTML='x';
    arr[Math.floor(input1/arr.length)][input1%arr.length]=1;
}
else
{
    options[input1].innerHTML='o';
    arr[Math.floor(input1/arr.length)][input1%arr.length]=0;
}
xtrun=!xtrun;
}
function play(input1)
{
    var bor=board.length;
    var clicked=parseInt(input1)
    var options=document.getElementsByClassName('val');
    if(board[Math.floor(input1/bor)][input1%bor]==-1)
    {
        change(input1,options,board);
    }
    else{
        return;
    }
    var temp=whowon(board)
    if(temp==1)
    {
        alert('x won');
        location.reload();
    }
    if(temp==0)
    {
        alert('o won');
        location.reload();
    }
    if(boardfull(board))
    {
        alert('draw');
        location.reload();
    }

}

