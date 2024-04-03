// Story setup - Characters and items
let sophiesApples = 5; // Sophie starts with 5 apples
let mikesApples = 3; // Mike starts with 3 apples

// Display initial amounts
console.log("Sophie starts with " + sophiesApples + " apples.");
console.log("Mike starts with " + mikesApples + " apples.");

// Arithmetic Operations
// Sophie finds a few more apples under a tree.
let applesFound = 4;
sophiesApples = sophiesApples + applesFound; // Sophie picks them up

// Display update
console.log("Sophie finds " + applesFound + " more apples under a tree.");
console.log("Now, Sophie has " + sophiesApples + " apples.");

// Mike gives away some of his apples to his friends.
let applesGivenAway = 2;
mikesApples = mikesApples - applesGivenAway; // Mike gives them away

// Display update
console.log("Mike gives away " + applesGivenAway + " apples to his friends.");
console.log("Now, Mike has " + mikesApples + " apple.");

// They decide to put their apples together for a pie.
let totalApplesForPie = sophiesApples + mikesApples;

// Display the final count
console.log("Together, Sophie and Mike have " + totalApplesForPie + " apples for the pie.");





// More complex operations:
// They need to divide the apples into two equally sized pies.
let piesToMake = 2;
let applesPerPie = totalApplesForPie / piesToMake; // Division

console.log("They are making " + piesToMake + " pies, so they need " + applesPerPie + " apples per pie.");

// They decide to give some pies to their neighbors. There are 4 neighbors, and each should get the same amount of pie.
let neighbors = 4;
let pieFractionPerNeighbor = piesToMake / neighbors; // Division

console.log("Each neighbor gets " + pieFractionPerNeighbor + " of a pie.");

// Unfortunately, they realize they can't cut a pie into pieces easily, so they decide to make individual mini pies instead.
// Each big pie will be turned into 4 mini pies.
let miniPiesPerBigPie = 4;
let totalMiniPies = piesToMake * miniPiesPerBigPie; // Multiplication

console.log("By making " + miniPiesPerBigPie + " mini pies from each big pie, they can make " + totalMiniPies + " mini pies in total.");

// Sophie wants to arrange the mini pies in rows for baking, with the same number of pies in each row.
let rowsForBaking = 3;
let piesPerRow = totalMiniPies / rowsForBaking; // Division

console.log("Sophie can arrange the " + totalMiniPies + " mini pies in " + rowsForBaking + " rows, with " + piesPerRow + " pies in each row for baking.");

// At the end of the day, they want to know how many apples they have used per mini pie.
let applesUsedPerMiniPie = totalApplesForPie / totalMiniPies; // Division
console.log("They have used " + applesUsedPerMiniPie + " apples for each mini pie.")





// Existing story code here...
// Update for Sophie and Mike opening a bakery
console.log("After their success with the mini pies, Sophie and Mike decide to open a bakery!");

// Let's assume they have some savings and a small business loan to open their bakery
let sophiesSavings = 2000; // Sophie's savings in dollars
let mikesSavings = 1500; // Mike's savings in dollars
let smallBusinessLoan = 5000; // Amount of small business loan in dollars

// Calculate total capital for the bakery
let totalCapital = sophiesSavings + mikesSavings + smallBusinessLoan;

console.log("Sophie has $" + sophiesSavings + ", Mike has $" + mikesSavings + ", and they got a small business loan of $" + smallBusinessLoan + ".");
console.log("Total capital for starting their bakery is $" + totalCapital + ".");

// Cost of opening the bakery
let rent = 1200; // Monthly rent in dollars
let equipmentCost = 3000; // One-time equipment cost in dollars
let initialIngredientCost = 800; // Initial cost for ingredients in dollars

// Subtracting the costs from the total capital to see what remains
totalCapital -= (rent + equipmentCost + initialIngredientCost);

console.log("They pay $" + rent + " for rent, $" + equipmentCost + " for equipment, and $" + initialIngredientCost + " for initial ingredients.");
console.log("After paying for the essentials, they now have $" + totalCapital + " left for other expenses.");

// Calculating costs for first month's operation
let employeeSalaries = 1500; // Salaries for the first month
let utilityBills = 500; // Utility bills for the first month

// Checking if they have enough capital left for the first month after operation costs
let capitalAfterFirstMonth = totalCapital - (employeeSalaries + utilityBills);

console.log("They will need to pay $" + employeeSalaries + " for employee salaries and $" + utilityBills + " for utility bills in the first month.");
console.log("After the first month's costs, they will have $" + capitalAfterFirstMonth + " left.");

// Assume each mini pie costs $5 and they sold 100 of them
let pricePerPie = 5; // Cost per mini pie
let piesSold = 100; // Number of pies sold

// Calculate the revenue from the first batch of pies
let revenue = pricePerPie * piesSold;

console.log("If they sell each mini pie for $" + pricePerPie + " and they sell " + piesSold + " pies, they will make $" + revenue + " in revenue.");

// Updating capital with revenue
totalCapital += revenue;

console.log("After selling their pies, Sophie and Mike have $" + totalCapital + " in their business account.");

// Previous story variables and code...
console.log("With their bakery now open, Sophie and Mike are selling pies, cakes, and cookies.");





// Let's say they make an average of $10 profit per sale and they make 50 sales a day
let averageProfitPerSale = 10; // Average profit per sale in dollars
let dailySales = 50; // Number of sales per day

// Calculate daily profit
let dailyProfit = averageProfitPerSale * dailySales;

console.log("The bakery makes an average of $" + averageProfitPerSale + " profit per sale.");
console.log("With " + dailySales + " daily sales, the total daily profit is $" + dailyProfit + ".");

// Adding the daily profit to the total capital
totalCapital += dailyProfit;

console.log("By the end of the day, the total capital is $" + totalCapital + ".");

// Sophie and Mike pay their employees at the end of the day
let employeeDailyWages = employeeSalaries / 30; // Assuming they operate every day of the month
totalCapital -= employeeDailyWages;

console.log("They pay their employees a daily total of $" + employeeDailyWages + ".");
console.log("After paying the employees, the total capital is $" + totalCapital + ".");

// They are closing the shop in the evening
console.log("Sophie and Mike are closing the shop after a busy day.");





// Calculate how much they need to set aside for the next day's ingredients
let nextDayIngredientsCost = 200; // Cost for next day's ingredients
totalCapital -= nextDayIngredientsCost;

console.log("They set aside $" + nextDayIngredientsCost + " for the next day's ingredients.");
console.log("The remaining capital at the end of the day is $" + totalCapital + ".");

// Assuming Sophie and Mike are saving a portion of the profits
let savingsPercentage = 0.1; // 10% savings
let dailySavings = dailyProfit * savingsPercentage;
totalCapital -= dailySavings;

console.log("They decide to save 10% of the daily profit, which is $" + dailySavings + ".");
console.log("After saving, the total capital is now $" + totalCapital + ".");

console.log("Sophie and Mike successfully close the shop, ready to start fresh tomorrow.");