# MultipleChoiceQuiz
In this project There is a multiple choice quiz with 5 question. You have to attempt the right answers. After the game has been completed there you can see a 'View Result button'. On click of this button you can check your answers with proper ressult.

## How to Use
1. You can download the folder or clone it by using "git clone" command.

2. Go to your project directory where you have clonned this project

For Example - cd C:/Users/HP/react-quiz

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### TestCases

Here are the testcases - 

Testcase1: Goto the quiz page try to mark 2 or more options of a question.

Testcase1 Result: You would not be able to mark more that one option of each question.

Testcase2: Try to submit all the questions without attempting any of it.

Testcase2 Result: There should not be any crash/error in app due to this.

Testcase3: After attempting all the questions click on End Game button.

Testcase3 Result: It will lead to the End Game Screen.

Testcase4: Attempt 2 right 2 wrong and 1 unattempted question and Click on the Show Result Button.

Testcase4 Result: On the Result screen you would be able to see correct answer, your answer and unattempted questions      accordingly.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.