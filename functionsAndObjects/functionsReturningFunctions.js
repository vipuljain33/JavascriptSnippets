function interviewQuestion(job)
{
  if(job === 'teacher')
  {
    return function(name)
    {
      console.log(`What subject do you teach ${name} ?`);
    }
  }

  if(job === 'designer')
  {
    return function(name)
    {
      console.log(`Which UX design do you know, ${name} ?`);
    }
  }
}

var teacher = interviewQuestion('teacher')
teacher('john')

var designer = interviewQuestion('designer')
designer('Mark')
