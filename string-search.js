// const products =[
//     'samsung phone',
//     'LG supernova laptop',
//     'HTC low price Phone',
//     'dell hardcore laptop',
//     'yellow Laptop with black camera',
// ];
// const searching = 'laptop';
// // for  indexOf
// const output =[];
// for( const product of products){
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product);
//     }
// }
// console.log(output);

const products =[
    'samsung phone',
    'samsung phone',
    'LG supernova laptop',
    'HTC low price Phone',
    'dell hardcore laptop',
    'yellow Laptop with black camera',
];
const searching = 'samsung';
// for  indexOf
const output =[];
for( const product of products){
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);