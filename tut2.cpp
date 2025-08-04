#include<iostream>
#include<vector>
using namespace std;

class Node {
    public:
    int data;
    Node* next;

    Node(int v){
        data = v;
        next = NULL;
    }
};
class LL{
    public:
    Node* head;
    LL(){
        head = NULL;
    }
    void insertend(int v){
        Node* newNode = new Node(v);
        if(head == NULL){
            head = newNode;
            return;
        }
        Node* temp = head;
        while(temp->next != NULL){
            temp = temp->next;
        }
        temp->next = newNode;
    }

    void inserthead(int val){
        Node* newNode = new Node(val);
        if(head == NULL){
            head = newNode;
        }
      newNode->next = head;
      head = newNode;
    }

    void insertbetween(int pos, int val){
        Node* newNode = new Node(val);
        if(pos == 0){
            inserthead(val);
            return;
        }
        Node* temp = head;
        for(int i = 0; i < pos - 1; i++){
            temp = temp->next;
        }
        newNode->next = temp->next;
        temp->next = newNode;
    }


    void print(){
        Node* temp = head;
        while(temp != NULL){
            cout<<temp->data<<" ";
            temp = temp->next;
        }
        cout<<endl;
    }
};

Node* createlinkedlist(vector<int> & arr){
    LL linked;
    for(int i = 0; i < arr.size(); i++){
        linked.insertend(arr[i]);
    }

    linked.inserthead(100);
    linked.insertbetween(2,500);

    linked.print();


    return linked.head;
}



int main(){
   vector<int> arr = {10,20,30,40,50};

   createlinkedlist(arr);
    return 0;

}