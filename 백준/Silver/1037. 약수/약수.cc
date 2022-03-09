#include <iostream>
using namespace std;

int ar[51];
int main()
{

	int N;
	cin >> N;
	for (int i = 0; i < N; i++) { cin >> ar[i]; }

	int max = ar[0];
	int min = ar[0];
	for (int j = 0; j < N; j++)
	{
		if (max < ar[j]) { max = ar[j]; }
		if (min > ar[j]) { min = ar[j]; }
	}
	cout << min * max << endl;
}