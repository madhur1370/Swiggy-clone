#include<iostream>
#include<bits/stdc++.h>
using namespace std;
// int maxholidays=0;
// int max(int a,int b)
// {
//     if(a>b)
//     return a;
//     return b;
// }
// int solve(int s,vector<vector<int>>&c,vector<vector<int>>&l,int h);
// int pathnquater(int i,int s,vector<vector<int>>&c,vector<vector<int>>&l,int h);
// map<vector<int>,int>m;
// int pathnquater(int i,int s,vector<vector<int>>&c,vector<vector<int>>&l,int h)
// {
//     if(h>=4)
//     return 0;
//     if(i>2)
//     return solve(s,c,l,h+1);
//     if(m.find({i,s,h})!=m.end())
//     return m[{i,s,h}];
//     int holiday=0;
//     for(auto j:c[s])
//     {
//         holiday=max(holiday,l[j][(h==0)?0:h*4-1]+pathnquater(i+1,j,c,l,h));
//     }
//     return m[{i,s,h}]=holiday;
// }


// int solve(int s,vector<vector<int>>&c,vector<vector<int>>&l,int h)
// {
//     int holiday=0;
//     holiday=max(holiday,pathnquater(1,s,c,l,h));
//     holiday+=l[s][(h*4-1<0)?0:h*4-1];
//     return holiday;
// }
// int main()
// {
//     vector<vector<int>>cities(6);
//     cities[0]={1,2,3,5};
//     cities[1]={0,3,5};
//     cities[2]={0,3,4};
//     cities[3]={0,1,2,4,5};
//     cities[4]={2,3};
//     cities[5]={0,1,3};
//     vector<vector<int>>leave(6);
//     leave[0]={1,3,4,2,1,5,6,5,1,7,2,1};
//     leave[1]={5,1,8,2,1,7,2,6,2,8,2,6};
//     leave[2]={2,5,8,2,1,6,9,3,2,1,5,7};
//     leave[3]={6,4,1,6,3,4,7,3,2,5,7,8};
//     leave[4]={2,4,3,1,7,2,6,8,2,1,4,6};
//     leave[5]={2,4,6,7,2,1,3,6,3,1,6,8};
    
//     for(int i=0;i<6;i++)
//     {
//         maxholidays=max(maxholidays, solve(i,cities,leave,0));
//     }
//     cout<<maxholidays;
//     return 0;
// }



class parent{
    public :
    int a=1;
    parent(){
        cout<<"parent cons\n";
    };
    virtual void hello(){
        cout<<"parent hello";
    }
};

class child:public parent{
    public:
    int a=2;
    int b=3;
    child(){
        cout<<"child cons\n";
    };
    void hello() override{
        cout<<"child hello";
    }
};


int main()
{
    parent obj=child();
    cout<<obj.a;
    obj.hello();
    return 0;
}