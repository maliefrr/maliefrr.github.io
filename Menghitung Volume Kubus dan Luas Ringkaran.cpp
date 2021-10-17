#include<iostream>
using namespace std;

int main(){
	//MENGHITUNG VOLUME KUBUS
	
	int sisi_1 , sisi_2 , sisi_3;
	
	cout<<"masukkan nilai sisi_1 = ";
	cin>>sisi_1;
	cout<<"masukkan nilai sisi_2 = ";
	cin>>sisi_2;
	cout<<"masukkan nilai sisi_3 = ";
	cin>>sisi_3;
	
	cout<< "volume kubus = "<< sisi_1 * sisi_2 * sisi_3 <<"cm^3" <<endl;


	
	//MENGHITUNG LUAS LINGKARAN
	
	float phi;
	int r;
	
	cout<< "masukkan nila phi = ";
	cin>>phi;
	cout<< "masukkan nilai r = ";
	cin>>r;
	
	cout<< "luas lingaran = " <<phi * r * r <<"cm^2" ;
	
	
	
	return 0;
	
}
