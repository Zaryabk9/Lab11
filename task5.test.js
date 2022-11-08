const Cal = require("./task5")
test(" Testing Search Fun ",()=>{
    expect(Cal.Search(5)).toBe(true);
         
   });

   test(" Testing Search Fun ",()=>{
    expect(Cal.Search(22)).toBe(false);
         
   });