const sum=require("./cal")

test("Sumtest case1",()=>{
expect(sum.sum(1,2)).toBe(3)

});

test("Minustest case2",()=>{
    expect(sum.minus(4,3)).toBe(1)
    
    });

test("Multiplytest case3",()=>{
expect(sum.multiply(1,2)).toBe(2)

});

test("Dividetest case1",()=>{
    expect(sum.divide(2,2)).toBe(1)
    
    });


    test("Dividetest case2",()=>{
        expect(sum.divide(0,0)).toBe("Infinity")
        
        });