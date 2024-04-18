#include <iostream> 

using namespace std;

int main(int argc, char* argv[])
{
    int arr[5] = { 1, 2, 3, 4, 5 }; 
    for (int i = 0; i < 5; i++)
    {
        cout << ( i[arr]); //notice how arr[i] is reversed. its still perfectly valid code.
    }

    return 0;
} 
