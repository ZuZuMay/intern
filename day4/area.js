console.log(f(4,3,2))

function f(n,b,c)
{
    const num = (n + b + c) / 2;
    const area = Math.sqrt(num * ((num -n ) * (num - b) * (num - c)))
    console.log(area);
}