var Name = prompt("What is your name?");

if (Name.length != 0){
    if (Name == "Colleen")
      document.write("What a beautiful name");
    else
      document.write("Hello " +  Name);
    
}
else
   document.write("Feeling shy?");

 /*As soon as a conditional is matched, the rest can be skipped*/