interface MajorCredits {
  credits: number;
  _majorBrand: void;
}

interface MinorCredits {
  credits: number;
  _minorBrand: void;
}

const course1: MajorCredits = { credits: 3 } as MajorCredits;
const course2: MajorCredits = { credits: 3 } as MajorCredits;
const course3: MinorCredits = { credits: 1 } as MinorCredits; 
const course4: MinorCredits = { credits: 1 } as MinorCredits;

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return { credits: subject1.credits + subject2.credits} as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return { credits: subject1.credits + subject2.credits} as MinorCredits;
}

sumMajorCredits(course1, course2);
sumMinorCredits(course3, course4);
