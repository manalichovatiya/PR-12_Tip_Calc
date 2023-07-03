 // Get all range input elements
 const range__ = document.querySelectorAll("input[type='range']");       
 range__.forEach(slider => slider.addEventListener("input", tip_Cal)); // Add event listener to each range input

 const bill_Input = document.getElementById("bill"); 
 bill_Input.addEventListener("change", tip_Cal); // Add event listener to bill input for "change" event    

 function tip_Cal() {
     let bill = Number(bill_Input.value);
     let tip_Value = Number(document.getElementById("tip").value);
     let People_ = Number(document.getElementById("no_of_people").value);       
     document.getElementById("tip_percent").textContent = `₹ ${tip_Value}%`;// Update tip percentage display     
     document.getElementById("people_num").textContent = People_;// Update number of people display      
     bill_Input.value = bill.toFixed(2);// toFixed uesd to fixed decimal with 2 digits after the decimal point
     // Calculate total tip amount
     let totalTip = (bill * (tip_Value / 100)).toFixed(2);
     document.getElementById("tip_amount").textContent = `₹ ${totalTip}`;     
     // Calculate total amount (bill + tip)
     let total = (bill + Number(totalTip)).toFixed(2);
     document.getElementById("total_amount").textContent = `₹ ${total}`;      
     // Calculate tip per person
     let tip_PerPersonValue = (totalTip / People_).toFixed(2);
     document.getElementById("tip_per_person").textContent = `₹ ${tip_PerPersonValue}`;     
     // Calculate total per person
     let total_PerPersonValue = (total / People_).toFixed(2);
     document.getElementById("total_per_person").textContent = `₹ ${total_PerPersonValue}`;
 }
 tip_Cal();

 function remove_amount(){// Function to clear the bill input field     
     document.getElementById('bill').value="";
 }