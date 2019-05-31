let q = new queue();
let valid = true;

//Add sevral items to the queue
for(let i =0;i<10;i++)
{
    q.enqueue(i);
}

//testing for count
if(q.Count()!= 10)
{
    valid = false;
}

if(!valid)
{
    console.log("Count faliure 1.\n"+ q.Count());
}

//test for the existance of those items.
for(let i =0;i<10;i++)
{
    if(q._Data[i] != i)
    {
        valid = false;
        break;
    }
}

if(!valid)
{
    alert("failed in Adding items!");
}

q.dequeue();
q.dequeue();
q.dequeue();
q.View();

//testing for count
if(q.Count()!= 7)
{
    valid = false;
}

if(!valid)
{
    alert("Count faliure 2.");
}

for(let i =0;i<q.Count();i++)
{
    if(q._Data[i] != i+3)
    {
        valid = false;
        break;
    }
}

if(!valid)
{
    alert("failed in removing items!");
}
//All tests passed
if(valid)
{
    alert("tests successfully passed :D");
}
