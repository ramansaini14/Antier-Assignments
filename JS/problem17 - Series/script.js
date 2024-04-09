function ser1()
{
    for (i=1; i<=10; i+=2)
        {
            document.write(i + " ");
        }

}

function ser2()
{
    for (i=0; i<=8; i+=2)
        {
            document.write(i + " ");
        }

}


function ser3()
{
    for (i=10; i>=6; i--)
    {
        document.write(i + " ");
    }
    
}

//3 5 7 9
function ser4()
{
    for (i=1; i<=5; i++)
        {

                document.write(i*i + " ");
        }

}

//0 3 8 15 29
function ser5()
{
    for (i=1; i<=5; i++)
        {
            document.write((i*i)-1 + " ");
        }

}

//
function ser6()
{
    for (i=1; i<=1000; i*=10)
        {
            document.write(i + " ");
        }

}

//5 10 15 20 25
function ser7()
{
    for (i=1; i<=5; i++)
        {
            document.write(i*5 + " ");
        }

}

//1 3 6 10 15
function ser8()
{
    sum=0;
    for (i=1; i<=5; i+=1)
        {
            sum=sum+i;
            document.write(sum + " ");
        }

}

//1 0 1 0 1 0 1 0
function ser9()
{
    for (i=0; i<=10; i++)
        {
            if(i%2!=0)
            {
                document.write(0);
            }
            else
            {
                document.write(1);

            }
        }

}