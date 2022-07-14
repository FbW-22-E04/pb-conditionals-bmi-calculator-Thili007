//Q1 Store Mark's and John's mass and height in variables.

var markMass = 60;
var markHeight = 1.55;

var johnMass = 60;
var johnHeight = 1.82;

//Q2 Calculate both their BMIs and store their BMIs in variables.

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
var markMoreBeefCake = markBMI > johnBMI ? true : false;

console.log("Q3", markMoreBeefCake);

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

if (markMoreBeefCake) {
  console.log(
    `Q4: Is Mark's BMI higher than John's? yes, it's ${markMoreBeefCake}.`
  );
} else {
  console.log(
    `Q4: That is blatantly ${markMoreBeefCake}, John may be built for speed, but Mark? Mark is built for comfort.`
  );
}

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markMoreBeefCake === true) {
  console.log("Q5: Mark", `${markBMI.toFixed(2)}`);
} else {
  console.log("Q5: John", `${johnBMI.toFixed(2)}`);
}
