const findTheOldest = function (people = []) {
    let yearsOfPeople = people.map((person) => {
      if (!person.yearOfDeath) {
        person.years = (new Date()).getFullYear() - person.yearOfBirth;
        return person;
      }
      person.years = person.yearOfDeath - person.yearOfBirth;
      return person;
    }).sort((a, b) => b.years - a.years);
    return yearsOfPeople[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
