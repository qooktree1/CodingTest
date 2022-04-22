#include <iostream>
#include <queue>
using namespace std;
int N, K;
int main(void)
{
	cin >> N >> K;
	queue<int>q;
	for (int i = 0; i < N; i++) {
		q.push(i + 1);
	}
	cout << "<";
	for (int i = 0; i < N-1; i++) {
		for (int j = 0; j < K-1; j++) {
			q.push(q.front());
			q.pop();
		}
		cout << q.front() << ", ";
		q.pop();
	}
	cout << q.front() << ">";
	return 0;
}