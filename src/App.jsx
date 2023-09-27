import React from "react";

const Header = (props) => {
  console.log(props.course);
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  
  return (
    <>
      <Part course={props.course.parts[0]} />
      <Part course={props.course.parts[1]} />
      <Part course={props.course.parts[2]} />
    </>
  );
};
const Part = (props) => {
  return (
    <p>
      {props.course.name} {props.course.exercises}
    </p>
  );
};

const Footer = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />

      <Content
        course={course}
        
        
      />
      <Footer
        course={course}
      />
    </div>
  );
};

export default App;