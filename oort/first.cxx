#include <iostream>
//c++ stuff oh my!
using namespace std;
int main() 
{
var gumballs = rand()%1000+1;
var user = 0;
var start = 1;


while (start = 1) {
cout<<"Guess how many gumballs are in the machine?"<<endl;
cin >> user;
//question


if (user > gumballs) {
cout<<"Somewhat high in my opinion."<<endl;
cin >>user;
}
//user guess is too high... ^.... too low (below)
if (user < gumballs) {
cout<< "Way too low!"<endl;
cin >> user;
}
//user guess is correct (duh)
if (user = gumballs) {
cout<<"Correctomundo!"<endl;
start = 0
}


}


















}
