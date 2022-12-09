// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

                //The test results below show a good fail, the variable 'codeMsg is not defined'. I try and first use the split method 
                //to separate the whole string into individual elements in an array. Then I make a new variable to map over each element's
                // value, using strict equallity to change the specific letters to numbers. I then 'return' the array with join, which 
                // should place in back into a string, along with the changed elements. The terminal states my 'map' is not a function.
// a) Create a test with expect statements using the variables provided.
    // describe("codeMsg",() => {
    //     it("returns a string with a coded message",() => {
            
            const secretCodeWord1 = "Lackadaisical"
            // Expected output: "L4ck4d41s1c4l"
            const secretCodeWord2 = "Gobbledygook"
            // Expected output: "G0bbl3dyg00k"
            const secretCodeWord3 = "Eccentric"
            // Expected output: "3cc3ntr1c"

    //         expect(codeMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    //         expect(codeMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    //         expect(codeMsg(secretCodeWord3)).toEqual("3cc3ntr1c")

    //     })
    // })



                             //TEST RESULTS: FAIL_________________ReferenceError: codeMsg is not defined
                                             //Test Suites: 1 failed, 1 total
                                             //Tests:       1 failed, 1 total


// b) Create the function that makes the test pass.

        // const codeMsg = (string) => {
        //         string.split("")
        //        var separate = codeMsg.map((value) => {
        //       ('a'=== 4 | 'e' === 3 | 'i' === 1 | 'o' === 0)
        //        return separate.join()
        //        })

                    
             
        // }


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.


                                // For this problem the higher order function 'filter' comes to mind. I want to use this function to 
                                // iterate and output only a specfic letter. That is "a" and "e", which are provided as two variables.
                                // Getting past the good fail of the jest test, I move on to creating my function |wordArr|. I want
                                // to return both the variables, and I write the function so that it filters only the specific letters.
                                // My results are dismal with my variable not being defined.
// a) Create a test with expects statement using the variable provided.
                
                const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

//describe("wordArr",() => {
           // it("returns an array of all the words containing that particular letter",() => {

                
               // expect(wordArr(letterA)).toEqual(["Mango", "Apricot", "Peach"])
                const letterA = "a"

               // expect(wordArr(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
                const letterE = "e"
    
        //     })
        // })

        //                 //TEST RESULTS: FAIL_________________ReferenceError: wordArr is not defined
                                             //Test Suites: 1 failed, 1 total
                                             //Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.
        // const wordArr = fruitArray.filter((value => {
        //         return value.letterA && value.letterE
        // }))






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

                // In order to achieve the output of a true or false "full house", I choose to use a conditional statement and target
                // the index of each provided variable. My function, called "cards", uses strict equality to ensure the corresponding 
                // numbers in the index matches, returning a true boolean statement. If it is false however it will return false if
                // this condition is not met.  The terminal is notifying me that it recognizes cards is a function, but no boolean output
                //or other code is present.
//a) Create a test with expect statements using the variable provided.
describe("cards",() => {
         it('determines whether or not the array is a "full house"',() => {

             
            expect(cards(hand1)).toEqual([5, 5, 5, 3, 3])
            expect(cards(hand2)).toEqual([5, 5, 3, 3, 4])
            expect(cards(hand3)).toEqual([5, 5, 5, 5, 4])
            expect(cards(hand4)).toEqual([7, 2, 7, 2, 7])
             
 
         })
     })


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
                     //TEST RESULTS: FAIL_________________ReferenceError: cards is not defined
                                                //Test Suites: 1 failed, 1 total
                                                //Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.
        const cards = (array) => {
                if (hand1[0] === hand1[1] && hand1[2] === hand1[4] );
                else if(hand1[0] === hand1[2] && hand1[3] === hand1[4]);
                return array
        }
        console.log(cards)