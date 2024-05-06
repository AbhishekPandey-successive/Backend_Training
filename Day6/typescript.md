<!-- Compose a detailed document titled "typescript.md" that covers TypeScript, including information on basic types and variables in TypeScript. -->

TypeScript is an open-source, object-oriented programming language developed and maintained by Microsoft Corporation. Its journey began in 2012, and since then, it has gained significant traction in the developer community. It is a Strict Super Set of JavaScript, which means anything implemented in JavaScript can be implemented using TypeScript along with adding enhanced features (every existing JavaScript Code is a valid TypeScript Code). As TypeScript code is converted to JavaScript code it makes it easier to integrate into JavaScript projects. It is designed mainly for large-scale projects.

Key features of Typescript:

1.Static Type Checking
2.Class_Based Objects
3.Modularity
4.ES6 Features
5.Syntactical Sugaring


Data Types in TypeScript:

Whenever a variable is created, the intention is to assign some value to that variable but what type of value can be assigned to that variable is dependent upon the datatype of that Variable. In typeScript, type System represents different types of datatypes which are supported by TypeScript.

Built-in Datatypes: TypeScript has some pre-defined data-types-

1.number -It is used to represent both Integer as well as Floating-Point numbers

2.boolean-Represents true and false

3.string-	It is used to represent a sequence of characters.

4.void-Generally used on function return-types

5.null-It is used when an object does not have any value

6.undefined-Denotes value given to uninitialized variable

7.any-If variable is declared with any data-type then any type of value can be assigned to that variable


Variables in TypeScript:
The variable is a named place in memory where some data/value can be stored. They serve as containers for storing data values, allowing to store numeric, string, boolean, and other types of information.

Variable Declaration in TypeScript:

1.var: Traditionally used in JavaScript, it has some quirks and scoping rules that can lead to unexpected behaviour. Variables declared with var are accessible anywhere within their containing function, module, namespace, or global scope.

2.let: Introduced to address the limitations of var, let provides block-scoping. It allows you to declare variables that are confined to specific blocks of code (such as loops or conditional statements). This helps prevent accidental variable redeclaration and enhances code clarity.

3.const: Similar to let, const also has block-scoping. However, it goes a step further by preventing re-assignment after initialization. Once you assign a value to a const variable, you cannot change it. Use const for values that should remain constant throughout your program.



