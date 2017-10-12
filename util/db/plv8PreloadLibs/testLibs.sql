-- select plv8_startup();
-- do language plv8 ' load_module("underscore"); load_module("jpath"); ';
-- test the underscore module's extend function
do language plv8 $$ 
   x = {'a':1}; 
   y=_.extend(x,{'a':2,'b':3},{'b':4,'c':5}); 
   plv8.elog(NOTICE,JSON.stringify(y)); 
$$;
-- test jpath module's filter function
do language plv8 $$
  var jsonData = {
    people: [
        {name: "John", age:26, gender:"male"},
        {name: "Steve", age:24, gender:"male"},
        {name: "Susan", age:22, gender:"female"},
        {name: "Linda", age:30, gender:"female"},
        {name: "Adam", age:32, gender:"male"}
    ]
  };
  //We want to get all males younger then 25
  var match = jpath.filter(jsonData, "people[gender=male && age < 25]");
  plv8.elog(NOTICE,JSON.stringify(match));
$$;