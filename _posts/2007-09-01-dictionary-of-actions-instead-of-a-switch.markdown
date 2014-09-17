---
layout: post
title:  "Dictionary of Actions instead of a Switch"
comments: true
tags: [c-sharp]
---


I hate switch statements. They just looks bad.

So take a look ata nice example [I've read at Luca Bolognese's](http://blogs.msdn.com/lucabol/archive/2007/08/31/instead-of-a-simple-switch-statement.aspx), for switching from a switch based code to a cleaner one.

The syntax in pre-c#3 would be less nice (delegate() instead of lambda, and parseFuncs.Add instead of the initializer) but it's doable.

Heck, it reminds me of some old university-level Ansi-C code I've once wrote for a matrix-calculator program:

```
typedef struct { char * name; char * (*func)(char *); char * description;} cmd_class; 

// matrix functions.// pre: parameter string. post: answer is printed or stored in matrixchar * read_mat(char * parm_string);char * print_mat(char * parm_string);char * add_mat(char * parm_string);char * sub_mat(char * parm_string);char * mul_mat(char * parm_string);char * mul_scalar(char * parm_string);char * trans_mat(char * parm_string); 
cmd_class cmd[] = { {"read_mat", read_mat, "parameters: matrix,val1[,val2,...,val16]"},  {"print_mat", print_mat, "parameters: matrix"},  {"add_mat", add_mat, "parameters: matrix_A,matrix_B[,target_matrix]"},  {"sub_mat", sub_mat, "parameters: matrix_A,matrix_B[,target_matrix]"},  {"mul_mat", mul_mat, "parameters: matrix_A,matrix_B[,target_matrix]"},  {"mul_scalar", mul_scalar, "parameters: matrix,scalar[,target_matrix]"},  {"trans_mat", trans_mat, "parameters: matrix[,target_matrix]"},  {"stop", stop, "exit program"}, {"menu", print_menu, "print this menu"}, {"not_valid", NULL, "NULL"}};

```

It allowed me to avoid switch by looping over the cmd[] array in a helper method, thus able to do

```
command(commandName).func(params);
```

Not exactly a typical jet-fighter-realtime-c-code, but it gave me a better looking code, and a 100/100 grade.

