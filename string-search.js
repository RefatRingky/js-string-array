const products =[
    'samsung phone',
    'LG supernova laptop',
    'HTC low price Phone',
    'dell hardcore laptop',
    'yellow Laptop with black camera',
];
const searching = 'laptop';
// for  indexOf
const output =[];
for( const product of products){
    if (product.indexOf(searching) != -1) {
        output.push(product);
    }
}
console.log(output);