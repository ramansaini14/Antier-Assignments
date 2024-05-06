import React from "react";

// Create functions 
// =>MissedGoal() which prints "Goal is Missed" with RED div font, colors etc  
// =>MadeGoal() which prints "Goal is Done" with Green div font, colors etc
// =>Goal(props) which checks on basis of TRUE FALSE which component need to call 
// such as <Goal isGoal={false} />explain me this question in simple language, i want to code this in react

function MissedGoal(arg) {
    return (
      <div>
        <h1 class="red">Goal is Missed</h1>
      </div>
    );
  }
  
  function MadeGoal(arg) {
    return (
      <div>
        <h1 class="green">Goal is Made</h1>
      </div>
    );
  }
  
  function Goal(arg) {
      if(arg.isGoal)
        {
          return <MadeGoal/>
        }
        else{
          return <MissedGoal/>
        }
  }

  export default Goal;