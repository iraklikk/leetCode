

function removeDuplicate(nums) {
   let newArray = [];


   for (let item of nums) {
      if (newArray.indexOf(item) == -1) {
         newArray.push(item);
      }
   }

   nums = newArray;
   return nums;
}



var mergeTwoLists = function (l1, l2) {
   let newArr = [];

   for (let i = 0; i < l1.length; i++) {
      newArr.push(l1[i]);
   }
   for (let i = 0; i < l2.length; i++) {
      newArr.push(l2[i]);
   }


   return newArr.sort((a, b) => a - b)
}


let removeDuplicates = function (nums) {

   let exit = false;
   while (!exit) {
      exit = true;
      for (let i = 1; i < nums.length; i++) {
         if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            exit = false;
         }
      }
   }

   return nums;
};

let removeElement = function (nums, val) {
   let exit = false;
   while (!exit) {
      exit = true;
      for (let i = 0; i < nums.length; i++) {
         if (nums[i] == val) {
            nums.splice(i, 1);
            exit = false;
         }
      }

   }

   return nums;
};

let removeElements = function (nums, val) {
   nums = nums.filter(item => item != val);
   return nums;
}



let isValid = function (s) {
   let count1 = 0;
   let count2 = 0;
   let count3 = 0;

   for (let i = 0; i < s.length + 1; i++) {
      if (s[i] == '[') {
         count1++;
      } else if (s[i] == ']') {
         count1--;
      } else if (s[i] == '(') {
         count2++;
      } else if (s[i] == ')') {
         count2--;
      } else if (s[i] == '{') {
         count3++;
      } else if (s[i] == '}') {
         count3--;
      } else {
         continue;
      }

   }
   return count1 == 0 && count2 == 0 && count3 == 0;
}


let lengthOfLastWord = function (s) {
   //determine the position of last letter
   let lastLetter = s.split('').map((char) => char != " ").lastIndexOf(true);
   //if s has no letters return 0
   if (lastLetter == -1) {
      return 0;
   }
   //if last letter is last character find last space and
   //return distance between last space and last letter
   if (lastLetter == s.length - 1) {
      let firstSpace = s.split('').map((char) => char != " ").lastIndexOf(false);
      return lastLetter - firstSpace
   }
   //if last letter is not last character, get rid of spaces after last character
   // find last space before character and return distance between last space and last letter
   s = s.substring(0, lastLetter + 1);
   let firstSpace = s.split('').map((char) => char != " ").lastIndexOf(false);
   return lastLetter - firstSpace;
}

let myAtoi = function (s) {
   // remove leading spaces
   if (s[0] == ' ') {
      let firstChar = s.split('').map(char => char != " ").indexOf(true);
      s = s.substring(firstChar)
   }
   // define n and parse leading valid numbers to it stop when we hit a non number character
   let n = 0;
   let isNegative = false;
   // check if string is starting with + 
   // remove first + 
   if (s[0] == "+") {
      s = s.replace('+', "");
      for (let i = 0; i < s.length; i++) {
         if (!isNaN(Number.parseInt(s[i]))) {
            n *= 10;
            n += Number.parseInt(s[i]);
         }
         else {
            break;
         }
      }
   }
   // check if string is starting with -
   // remove first -
   else if (s[0] == "-") {
      s = s.replace('-', "");
      for (let i = 0; i < s.length; i++) {
         if (!isNaN(Number.parseInt(s[i]))) {
            n *= 10;
            n += Number.parseInt(s[i]);
         }
         else {
            break;
         }
      }
      isNegative = true;
   }

   else {
      for (let i = 0; i < s.length; i++) {
         if (!isNaN(Number.parseInt(s[i]))) {
            n *= 10;
            n += Number.parseInt(s[i]);
         }
         else {
            break;
         }
      }
   }
   if (isNegative) {
      n = -n
   }

   if (n > (2 ** 31 - 1)) {
      return 2 ** 31 - 1
   }
   if (n < -(2 ** 31)) {
      return -(2 ** 31);
   }


   return n;
}


let runningSum = function (nums) {
   for (let i = 1; i < nums.length; i++) {
      nums[i] = nums[i - 1] + nums[i];
   }
   return nums;
}

let kidsWithCandies = function (candies, extraCandies) {
   let maxCandies = Math.max(...candies)
   return candies.map(candies => candies + extraCandies >= maxCandies)
};



//unfinished
let strongPasswordChecker = function (password) {
   let steps = 0;
   let exit = false;
   while (!exit) {
      exit = true;
      for (let i = 2; i < password.length; i++) {
         if (password[i] == password[i - 1] && password[i] == password[i - 2]) {
            steps++;
            password = password.substring(0, i) + password.substring(i + 1);
            exit = false;
         }
      }
   }
   if (password.length >= 6 && password.length <= 20) {
      if (password.toLowerCase() == password) {
         steps += 2;
      }
      if (password.toUpperCase() == password) {
         steps += 2;
      }
   }
   else if (password.length < 6) {
      steps += (6 - password.length)
   } else {
      steps += (password.length - 20)
   }
   return steps;
};

let maximumWealth = function (accounts) {
   let maxWealth = 0;
   let temp = 0;
   for (let i = 0; i < accounts.length; i++) {
      for (let j = 0; j < accounts[i].length; j++) {
         temp += accounts[i][j];
      }
      if (temp > maxWealth) {
         maxWealth = temp;
      }
      temp = 0;
   }
   return maxWealth;
};




let shuffle = function (nums, n) {
   let newArray = [];

   for (let i = 0; i < n; i++) {
      newArray.push(nums[i]);
      newArray.push(nums[i + n])
   }
   return newArray;
}

let numIdenticalPairs = function (nums) {
   let goodPairs = 0;
   for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] == nums[j]) {
            goodPairs++;
         }
      }
   }
   return goodPairs;
}

let minPartitions = function (n) {
   n += ""
   let arr = n.split('')
   let nums = []
   let nums2 = []

   for (let i = 0; i < arr.length / 2; i++) {
      nums.push(Number.parseInt(arr[i]))
   }

   for (let i = arr.length / 2; i < arr.length; i++) {
      nums2.push(Number.parseInt(arr[i]))
   }

   return Math.max(Math.max(...nums), Math.max(...nums2));
}



let numJewelsInStones = function (jewels, stones) {
   let count = 0;

   for (let i = 0; i < stones.length; i++) {
      if (jewels.split('').indexOf(stones[i]) != -1) {
         count++;
      }
   }
   return count;
}

var interpret = function (command) {
   let string = '';

   for (let i = 0; i < command.length; i++) {
      if (command[i] == '(') {
         if (command[i + 1] == ')') {
            string += "o"
         }
         if (command[i + 1] == 'a') {
            string += 'al'
         }
      }
      if (command[i] == 'G') {
         string += 'G';
      }
   }
   return string;
}


let smallerNumbersThanCurrent = function (nums) {
   let newArray = [];

   for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
         if (nums[i] > nums[j]) {
            count++;
         }
      }
      newArray.push(count)
   }

   return newArray;
}

let countSmaller = function (nums) {
   let newArray = []

   for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] > nums[j]) {
            count++;
         }
      }
      newArray.push(count)
   }
   return newArray;
}



let numberOfSteps = function (num) {
   let steps = 0;
   while (true) {
      if (num == 0) {
         break;
      }
      if (num % 2 == 0) {
         num /= 2;
         steps++;
      }
      if (num % 2 == 1) {
         num -= 1;
         steps++;
      }
   }
   return steps;
}



let subtractProductAndSum = function (n) {
   let arr = (n + "").split('');

   let sum = arr.reduce((acc, number) => +acc + +number);
   let product = arr.reduce((acc, number) => +acc * +number, 1)
   return product - sum
}

let numberOfArithmeticSlices = function (A) {



   //time limit exceeded
   let count = 0;
   for (let i = 0; i < A.length - 2; i++) {
      let diff = A[i + 1] - A[i];
      for (let j = i + 2; j < A.length; j++) {
         let isArithmetic = true;
         for (let k = i + 1; k <= j; k++) {
            if (A[k] - A[k - 1] != diff) {
               isArithmetic = false;
            }
         }
         if (isArithmetic) {
            count++;
         }
      }

   }
   return count;
}


let decompressRLElist = function (nums) {
   let decodedNums = [];

   for (let i = 0; i < nums.length; i += 2) {
      let n = nums[i];
      while (n > 0) {
         decodedNums.push(nums[i + 1])
         n--;
      }
   }
   return decodedNums;
}

//bad runtime
let restoreString = function (s, indices) {
   let newS = [];

   for (let i = 0; i < s.length; i++) {
      newS.push(s[indices.indexOf(i)])
   }

   return newS.join('');
}


//unfinished
var createTargetArray = function (nums, index) {
   let targetArray = [];

   nums.forEach((x, i) => targetArray.splice(index[i], 0, x));

   return targetArray;
}



//unfinished
// let groupThePeople = function (groupSizes) {
//    let orderedGroup = [];
//    let maxNumber = Math.max(...groupSizes);
//    while (maxNumber > 0) {

//    }
// }



let balancedStringSplit = function (s) {
   let counter = 0;
   let res = 0;

   for (let i = 0; i < s.length; i++) {
      if (s[i] == 'L') {
         counter++;
      } else {
         counter--;
      }

      if (counter == 0) {
         res++;
      }
   }

   return res;
}

let maxProduct = function (nums) {
   nums.sort((a, b) => a - b);
   let max = nums[nums.length - 1] - 1;
   let secondMax = nums[nums.length - 2] - 1;
   return max * secondMax;
}


let numberOfMatches = function (n) {
   let matchesPlayed = 0;

   while (n > 1) {
      if (n % 2 == 0) {
         n /= 2;
         matchesPlayed += n;
      } else {
         n -= 1;
         n /= 2;
         matchesPlayed += n + 1;
      }
   }
   return matchesPlayed;
}


let sumOddLengthSubarrays = function (arr) {
   let sum = 0;
   let subArraySum = 0;
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
         for (let k = i; k <= j; k++) {
            subArraySum += arr[k];
            count++;
         }
         if (count % 2 == 0) {
            subArraySum = 0;
            count = 0;
         }
         else {
            sum += subArraySum;
            subArraySum = 0;
            count = 0;
         }
      }
   }
   return sum;
}


let destCity = function (paths) {
   let path = paths.map(array => array[0]);;
   let destination = paths.map(array => array[1]);;

   for (let i = 0; i < path.length; i++) {
      destination = destination.filter(item => item != path[i]);
   }

   return destination[0];
}


let canBeEqual = function (target, arr) {
   return arr.sort((a, b) => a - b).join('') == target.sort((a, b) => a - b).join('');
}



let findNumbers = function (nums) {
   return nums.filter(num => (num + '').length % 2 == 1).length;
}


let diagonalSum = function (mat) {
   let sum = 0;
   for (let i = 0; i < mat.length; i++) {
      sum += mat[i][i] + mat[i][mat.length - i - 1]
   }
   if (mat.length % 2 == 1) {
      sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
   }
   return sum;
}

let largestAltitude = function (gain) {

   let newArr = [0];
   let sum = 0;
   for (let i = 0; i < gain.length; i++) {
      sum += gain[i]
      newArr.push(sum)
   }
   return newArr.sort((a, b) => a - b)[newArr.length - 1];
}


let maximum69Number = function (num) {
   return parseInt((num + '').replace('6', '9'))
}



let removePalindromeSub = function (s) {
   if (!s) {
      return 0;
   }
   else if (s == s.split('').reverse().join('')) {
      return 1;
   }
   else {
      return 2;
   }
}

//unfinished
let minSteps = function (s, t) {
   let count = 1;
   for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < t.length; j++) {
         if (s[i] == t[j]) {
            s = s.replace(s[i], '')
            t = t.replace(t[j], '')
            if (count = 1) {
               break;
            }
         }
      }
   }
   return s;
}
//unfinished
let minStep = function (s, t) {
   let sArr = []
   let tArr = []

   for (let i = 0; i < s.length; i++) {
      sArr.push(s.charCodeAt(i))
      tArr.push(t.charCodeAt(i))
   }
   sArr = sArr.sort((a, b) => a - b)
   tArr = tArr.sort((a, b) => a - b)

   let count = 0;

   for (let i = 0; i < sArr.length; i++) {
      for (let j = 0; j < tArr.length; j++) {
         if (sArr[i] == tArr[j]) {
            sArr.splice(i, 1);
            tArr.splice(j, 1);
         }
      }
   }
   return sArr.length;
}


let finalPrices = function (prices) {
   for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i + 1; j < prices.length; j++) {
         if (prices[j] <= prices[i]) {
            prices[i] = prices[i] - prices[j];
            break;
         }
      }
   }
   return prices;
}

let countGoodRectangles = function (rectangles) {
   let newArr = []
   for (let i = 0; i < rectangles.length; i++) {
      newArr.push(Math.min(rectangles[i][0], rectangles[i][1]))
   }
   let highest = Math.max(...newArr);
   let count = 0;
   for (let item of newArr) {
      if (item == highest) {
         count++;
      }
   }
   return count;
}

let freqAlphabets = function (s) {
   let temp = '';
   let decripted = '';
   for (let i = 0; i < s.length; i++) {
      if (s[i] != '#') {
         switch (s[i]) {
            case '1':
               decripted += 'a';
               break;
            case '2':
               decripted += 'b';
               break;
            case '3':
               decripted += 'c';
               break;
            case '4':
               decripted += 'd';
               break;
            case '5':
               decripted += 'e';
               break;
            case '6':
               decripted += 'f';
               break;
            case '7':
               decripted += 'g';
               break;
            case '8':
               decripted += 'h';
               break;
            case '9':
               decripted += 'i';
               break;
            case '0':
               decripted += '0'
               break;
         }
      } else {
         decripted = decripted.substring(0, decripted.length - 2);
         temp += s[i - 2] + s[i - 1];
         switch (temp) {
            case '10':
               decripted += 'j';
               break;
            case '11':
               decripted += 'k';
               break;
            case '12':
               decripted += 'l';
               break;
            case '13':
               decripted += 'm';
               break;
            case '14':
               decripted += 'n';
               break;
            case '15':
               decripted += 'o';
               break;
            case '16':
               decripted += 'p';
               break;
            case '17':
               decripted += 'q';
               break;
            case '18':
               decripted += 'r';
               break;
            case '19':
               decripted += 's';
               break;
            case '20':
               decripted += 't';
               break;
            case '21':
               decripted += 'u';
               break;
            case '22':
               decripted += 'v';
               break;
            case '23':
               decripted += 'w';
               break;
            case '24':
               decripted += 'x';
               break;
            case '25':
               decripted += 'y';
               break;
            case '26':
               decripted += 'z';
               break;
         }
         temp = '';
      }
   }
   return decripted;
}



let sumZero = function (n) {
   let arr = []
   if (n % 2 == 1) {
      arr.push(0)
   }
   n -= n % 2;
   let a = 1;
   while (n > 0) {
      arr.push(a);
      arr.push(a - 2 * a);
      n -= 2;
      a += 1;
   }
   return arr;
}

let searchRange = function (nums, target) {
   return [nums.indexOf(target), nums.lastIndexOf(target)]
}



let mergeAlternately = function (word1, word2) {
   let newWord = '';

   let length = Math.max(word1.length, word2.length);

   for (let i = 0; i < length; i++) {
      if (i < word1.length) {
         newWord += word1[i]
      }
      if (i < word2.length) {
         newWord += word2[i]
      }
   }
   return newWord;

}


let sumEvenGrandparent = function (root) {
   let sum = 0;
   let count = 0;
   let grandParent = 0;

   for (let i = 3; i < root.length; i++) {
      count++;
      if (root[grandParent] != null && root[grandParent] % 2 == 0) {
         if (root[i] != null) {
            sum += root[i]
         }
      }
      if (count % 4 == 0) {
         grandParent++;
      }
   }
   return sum;
};

let countNegatives = function (grid) {
   let count = 0;
   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
         if (grid[i][j] < 0) {
            count++;
         }
      }
   }
   return count;
}

let average = function (salary) {
   let sum = 0;
   salary = salary.sort((a, b) => a - b);
   for (let i = 1; i < salary.length - 1; i++) {
      sum += salary[i]
   }
   return sum / (salary.length - 2);
}


let numRookCaptures = function (board) {
   let rookH = 0;
   let rookV = 0;

   for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
         if (board[i][j] == 'R') {
            rookH = i;
            rookV = j;
         }
      }
   }

   let count = 0;

   for (let i = rookV - 1; i >= 0; i--) {
      if (board[rookH][i] == 'B') {
         break;
      }
      if (board[rookH][i] == 'p') {
         count++;
         break;
      }
   }

   for (let i = rookV; i < 8; i++) {
      if (board[rookH][i] == 'B') {
         break;
      }
      if (board[rookH][i] == 'p') {
         count++;
         break;
      }
   }


   for (let i = rookH; i >= 0; i--) {
      if (board[i][rookV] == 'B') {
         break;
      }
      if (board[i][rookV] == 'p') {
         count++;
         break;
      }
   }

   for (let i = rookH; i < 8; i++) {
      if (board[i][rookV] == 'B') {
         break;
      }
      if (board[i][rookV] == 'p') {
         count++;
         break;
      }
   }

   return count;
};

let board = [
   [".", ".", ".", ".", ".", ".", ".", "."],
   [".", ".", ".", "p", ".", ".", ".", "."],
   [".", "p", "B", "R", ".", ".", ".", "p"],
   [".", ".", ".", ".", ".", ".", ".", "."],
   [".", ".", ".", ".", ".", ".", ".", "."],
   [".", ".", ".", "p", ".", ".", ".", "."],
   [".", ".", ".", ".", ".", ".", ".", "."],
   [".", ".", ".", ".", ".", ".", ".", "."]
]

let board2 = [
   [".", ".", ".", ".", ".", ".", ".", "."],
   [".", ".", ".", "p", ".", ".", ".", "."],
   [".", ".", ".", "p", ".", ".", ".", "."],
   ["p", "p", ".", "R", ".", "p", "B", "."],
   [".", ".", ".", ".", ".", ".", ".", "."],
   [".", ".", ".", "B", ".", ".", ".", "."],
   [".", ".", ".", "p", ".", ".", ".", "."],
   [".", ".", ".", ".", ".", ".", ".", "."]]



let reverseString = function (s) {
   return s.split('').reverse().join('');
};


let reverseVowels = function (s) {
   let vowels = []

   for (let i = 0; i < s.length; i++) {
      if (s[i].toLowerCase() == 'a' || s[i].toLowerCase() == 'e' || s[i].toLowerCase() == 'i' ||
         s[i].toLowerCase() == 'o' || s[i].toLowerCase() == 'u') {
         vowels.push(s[i])
      }
   }

   vowels = vowels.reverse()

   let count = 0;
   let reversed = '';


   for (let i = 0; i < s.length; i++) {
      if (s[i].toLowerCase() == 'a' || s[i].toLowerCase() == 'e' || s[i].toLowerCase() == 'i' ||
         s[i].toLowerCase() == 'o' || s[i].toLowerCase() == 'u') {
         reversed += vowels[count]
         count++;
      }
      else {
         reversed += s[i]
      }
   }
   return reversed;
};

let sortArrayByParity = function (A) {
   let odd = []
   let even = []

   A.forEach(item => item % 2 == 0 ? even.push(item) : odd.push(item))

   return [...even, ...odd];
};


let reformatNumber = function (number) {
   number = number.replace(/ /g, '');
   number = number.replace(/-/g, '');
   let formatedNumber = ''
   let count = 1;
   for (let i = 0; i < number.length; i++) {
      formatedNumber += number[i]
      if (count % 3 == 0) {
         formatedNumber += '-'
      }
      count++
   }

   if (formatedNumber[formatedNumber.length - 2] == '-') {
      formatedNumber = formatedNumber.split('')
      let temp = formatedNumber[formatedNumber.length - 2];
      formatedNumber[formatedNumber.length - 2] = formatedNumber[formatedNumber.length - 3]
      formatedNumber[formatedNumber.length - 3] = temp;
      formatedNumber = formatedNumber.join('')
   }

   if (formatedNumber[formatedNumber.length - 1] == '-') {
      formatedNumber = formatedNumber.substring(0, formatedNumber.length - 1)
   }

   return formatedNumber;
};

// time limit exceeded
let palindromePairs = function (words) {
   let pPairs = [];
   let word = '';
   for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
         if (i == j) {
            continue;
         }
         word = words[i] + words[j];
         let first = word.substring(0, (word.length - (word.length % 2)) / 2);
         let second = word.substring((word.length + (word.length % 2)) / 2);
         if (first == second.split('').reverse().join('')) {
            pPairs.push([i, j]);
         }

      }
   }
   return pPairs;
}


let isPalindrome = function (word) {
   let first = word.substring(0, (word.length - (word.length % 2)) / 2);
   let second = word.substring((word.length + (word.length % 2)) / 2);
   // if (word.length % 2 == 0) {
   //    first = word.substring(0, word.length / 2);
   //    second = word.substring(word.length / 2);
   // } else {
   //    first = word.substring(0, (word.length - 1) / 2);
   //    second = word.substring((word.length + 1) / 2);
   // }

   return second;
   // return first == second.split('').reverse().join('')
}

let singleNumbers = function (nums) {
   const sum = nums.reduce(function (obj, item) {
      if (!obj[item]) {
         obj[item] = 0;
      }
      obj[item]++;
      return obj;
   }, {})

   for (let item in sum) {
      if (sum[item] == 1) {
         return parseInt(item)
      }
   }
};

var singleNumber = function (nums) {
   let uniques = [];
   nums = nums.sort((a, b) => a - b);
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] != nums[i + 1] && nums[i] != nums[i - 1]) {
         uniques.push(nums[i])
      }
   }
   return uniques;
};

var isPowerOfFour = function (n) {

   if (n == 1) {
      return true;
   }

   while (n != 0) {
      if (n == 4) {
         return true;
      }
      n /= 4;
   }
   return false;
};

let maxArea = function (height) {
   let max = 0;

   for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
         let min = Math.min(height[i], height[j]);
         let area = min * (j - i)
         if (area > max) {
            max = area;
         }
      }
   }

   return max;
};


// 42. Trapping Rain Water